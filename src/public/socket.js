const socket = io()
console.log({socket})

export const loadNotesFunction = () => {
    socket.on("loadNotes",(notes) => {
        console.log({notes})
    })
}

export const saveNotes = (title, description) => {
    socket.emit("saveNote",{
        title,
        description
    })
}