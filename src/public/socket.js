const socket = io()
console.log({socket})
// here we display notes in "front-end"
export const loadNotesFunction = callBack => {
    socket.on("backend-server:loadNotes", callBack)
}
// here we send note to back-end to save it
export const saveNotes = (title, description) => {
    socket.emit("frontend-client:saveNote",{
        title,
        description
    })
}
// here we recieve a new note
export const newNote = callBack => {
    socket.on("backend-server:newNote", callBack)
}
// here we send id note to delete it
export const deleteNotes = id => {
    socket.emit("frontend-client:deleteNote", id)
}