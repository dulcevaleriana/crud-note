const socket = io()
console.log({socket})
// here we display notes in "front-end"
export const loadNotesFunction = () => {
    socket.on("loadNotes",(notes) => {
        console.log({notes})
    })
}
// here we send note to back-end to save it
export const saveNotes = (title, description) => {
    socket.emit("saveNote",{
        title,
        description
    })
}