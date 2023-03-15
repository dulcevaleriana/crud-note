export default (io) => {
    io.on("connection",()=>{console.log("new user connection")})
}