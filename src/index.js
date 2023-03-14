import app from "./app.js"
import { Server as websockerServer } from "socket.io"
import http from "http"

const server = http.createServer(app)
const httpServer = server.listen(3000)
const io = new websockerServer(httpServer)

console.log("lisent to port 3000")