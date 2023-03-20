import {
    saveNotes,
    loadNotesFunction,
    newNote,
    deleteNotes,
    sendNote,
    receiveNotesToUpdateIt,
    updateNotes
} from "./socket.js";

export const ui = () => {
    const noteForms = document.querySelector("#noteForm")
    const noteList = document.querySelector("#notesList")
    const noteTitle = document.querySelector("#title")
    const noteDescription = document.querySelector("#description")
    let savedId = ""

// see only one note
const oneNote = (notes) => {
    const li = document.createElement("li")
    li.innerHTML = `
        <div>
            <h4>${notes.title}</h4>
            <p>${notes.description}</p>
            <button class="update" data-id="${notes._id}">Update</button>
            <button class="delete" data-id="${notes._id}">Delete</button>
        </div>
    `
    const getBtnDelete = li.querySelector(".delete")
    const getBtnUpdate = li.querySelector(".update")

    getBtnDelete.addEventListener("click", e => deleteNotes(getBtnDelete.dataset.id))
    getBtnUpdate.addEventListener("click", e => sendNote(getBtnUpdate.dataset.id))
    return li;
}

// see all notes list
    const renderNotes = (notes) => {
        console.log({notes})
        noteList.innerHTML = ``
        notes.forEach(element => noteList.append(oneNote(element)));
    }
    loadNotesFunction(renderNotes);

// excecute get new note
    newNote(note => noteList.append(oneNote(note)))

// execute selected note
    const fillNote = note => {
        console.log({note})
        savedId = note._id;
        noteTitle.value = note.title;
        noteDescription.value = note.description;
    }
    receiveNotesToUpdateIt(fillNote)

// take informations to send it to saveNote() function
    const onHandleSubmit = (e) => {
        e.preventDefault()
        let title = noteForms["title"].value
        let description = noteForms["description"].value

        console.log({
            title,
            description,
            savedId
        })
        if (savedId) {
            updateNotes(savedId,title,description)
            console.log("update")
        } else {
            saveNotes(title,description)
            console.log("submit")
        }

        savedId = "";
        title = "";
        description = ""
    }
    noteForms.addEventListener("submit",onHandleSubmit)
}