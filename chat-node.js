const http = require('http').createServer();
const io = require('socket.io').listen(server.listner);
const port = 3000

io.on('connection', (socket) => {
    console.log('connected')
})

io.on('disconnect', (evt) => {
    console.log('disconnected')
})

http.listen(port, () => console.log(`server listening on port: ${port}`))

io.on('connection', (socket) => {
    console.log('connected')
    socket.on('message', (evt) => {
        console.log(evt)
        socket.broadcast.emit('message', evt)
    })
})

