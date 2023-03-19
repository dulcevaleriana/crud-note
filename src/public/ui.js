import {saveNotes} from "./socket.js";

export const ui = () => {
    const noteForms = document.querySelector("#noteForm")

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