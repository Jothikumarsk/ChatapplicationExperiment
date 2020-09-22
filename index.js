const { Socket } = require('dgram')

let app = require('express')()
let http = require('http').createServer(app)
let port = 3000
let io = require('socket.io')(http)

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

io.on("connection",(Socket)=>{
    Socket.on("chat message",(msg)=>{
        io.emit("chat message",msg)
    })
})

http.listen({port},()=>{
    console.log(`server is listening on ${port}`)
})
