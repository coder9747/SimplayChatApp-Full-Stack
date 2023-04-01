const express = require("express");
const http = require('http');
const app = express();
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
});

io.on("connection",(socket)=>
{
    socket.on("roomJoined",(data)=>
    {
        console.log(data);
    })
})










server.listen(4500);