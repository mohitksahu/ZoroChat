const io = require('socket.io')(8000, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

const users = {};

io.on('connection', socket => {
  socket.on('new-user-joined', (name) => {
    //console.log("New user", name)
    users[socket.id] = name;
    socket.broadcast.emit('user-joined', name);

    socket.emit('current-users', Object.values(users));
  });

  socket.on('send', (message) => {
    socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('left', users[socket.id]);
    delete users[socket.id];
  });
});
