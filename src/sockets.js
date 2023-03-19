import Notes from "./models/Notes";
// here we create the CRUD process to create, read, update and delete notes
export default (io) => {
    io.on("connection",(socket)=>{
        console.log("new user connection")
// here we display note's list
        const emitNotes = async () =>{
            const notesList = await Notes.find()
            console.log({notesList})
            socket.emit("loadNotes",notesList)
        }
        emitNotes();
// here we save notes
        socket.on("saveNote", async (infoNote) => {
            const newNote = new Notes({
                title: infoNote.title,
                description: infoNote.description
            })
            const saveNote = await newNote.save()

            console.log({saveNote})
        })
    })
}