const socket = io('http://localhost:3000')

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp')
const messageContainer = document.querySelector(".container")

socket.on('connect', () => {
    console.log('Connected to the server');
});

socket.on('connect_error', (err) => {
    console.log('Connection error:', err);
});

const names = prompt("Enter tour name to join");
socket.emit('new-user-joined', names) 