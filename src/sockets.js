import Notes from "./models/Notes";
// here we create the CRUD process to create, read, update and delete notes
export default (io) => {
    io.on("connection",(socket)=>{
        console.log("new user connection")
// here we display note's list
        const emitNotes = async () =>{
            const notesList = await Notes.find()
            console.log({notesList})
            socket.emit("backend-server:loadNotes", notesList)
        }
        emitNotes();
// here we save notes
        socket.on("frontend-client:saveNote", async infoNote => {
            const newNote = new Notes({
                title: infoNote.title,
                description: infoNote.description
            })
            const saveNote = await newNote.save()
            io.emit("backend-server:newNote", saveNote)

            console.log({saveNote})
        })
// here we delete notes
        socket.on("frontend-client:deleteNote", async id => {
            console.log("to delete: ", id)
            await Notes.findByIdAndDelete(id)
            emitNotes()
        })
// here we send notes created to update
        socket.on("frontend-client:updateNote", async id => {
            console.log("to update: ", id)
            const getNoteById = await Notes.findById(id);
            console.log({getNoteById})
            io.emit("backend-server:sendNoteToUpdateIt",getNoteById)
        })
// here we update notes
        socket.on("frontend-client:updateNoteNOW", async data => {
            console.log("to update000: ", data)
            await Notes.findByIdAndUpdate(data._id, {
                title: data.title,
                description: data.description
            })
            emitNotes()
        })
    })
}