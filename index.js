const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const users = {};

io.on('connection', socket => {
  console.log('A user connected');

  socket.on('new-user-joined', name => {
    users[socket.id] = name;
    socket.broadcast.emit('user-joined', name, Object.keys(users).length);
    io.emit('participants-count', Object.keys(users).length); // Emit the count to all
  });

  socket.on('send', message => {
    socket.broadcast.emit('receive', { name: users[socket.id], message });
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('left', users[socket.id], Object.keys(users).length - 1);
    delete users[socket.id];
    io.emit('participants-count', Object.keys(users).length); // Emit the updated count
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
