import {
    saveNotes,
    loadNotesFunction,
    newNote,
    deleteNotes
} from "./socket.js";

export const ui = () => {
    const noteForms = document.querySelector("#noteForm")
    const noteList = document.querySelector("#notesList")

// see only one note
const oneNote = (notes) => {
    const li = document.createElement("li")
    li.innerHTML = `
        <div>
            <h4>${notes.title}</h4>
            <p>${notes.description}</p>
            <button>Update</button>
            <button class="delete" data-id="${notes._id}">Delete</button>
        </div>
    `
    const getBtnDelete = li.querySelector(".delete")
    getBtnDelete.addEventListener("click", e => deleteNotes(getBtnDelete.dataset.id))
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

// take informations to send it to saveNote() function
    const onHandleSubmit = (e) => {
        e.preventDefault()
        let title = noteForms["title"].value
        let description = noteForms["description"].value

        console.log({
            title,
            description
        })
        saveNotes(title,description)
        console.log("submit")
    }

    noteForms.addEventListener("submit",onHandleSubmit)
}