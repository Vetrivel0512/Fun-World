const express = require("express")
const socket_io = require("socket.io")
const  httpServer = require("node:http")

const SocketIO = httpServer.createServer(express)
const app = express()
const port = 4000
const io = socket_io(SocketIO)


io.on ("connection" , (socket)=>{
    socket.emit('message', 'Welcome to the chat!');
    // console.log(socket, "socket==> ")

})
app.listen((port, ()=>{
    console.log(`Example app listening on port ${port}`)
}))