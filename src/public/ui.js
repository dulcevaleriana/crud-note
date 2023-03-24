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
            <button class="update" data-id="${notes._id}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
            </button>
            <button class="delete" data-id="${notes._id}">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
            </button>
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