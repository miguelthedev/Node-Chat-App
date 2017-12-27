const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '/../public/');

app.use(express.static(publicPath));

io.on('connection', socket => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: "Starboy",
        text: "lorem lorem lorem lorem lorem",
        createdAt: new Date().toLocaleTimeString()
    });

    socket.on('createMessage', message => {
        console.log('Message:', message);
    })

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    })
});


server.listen(PORT, () => {
    console.log(`App is online on port ${PORT}`);
});