document.addEventListener('DOMContentLoaded', () => {
    // Replace this URL with your ngrok URL when testing
    const socket = io('https://ad6b-49-37-115-175.ngrok-free.app');

    const form = document.getElementById('send-container');
    const messageInput = document.getElementById('messageInp');
    const messageContainer = document.querySelector(".container");

    socket.on('connect', () => {
        console.log('Connected to the server');
    });

    socket.on('connect_error', (err) => {
        console.log('Connection error:', err);
    });

    const append = (message, position) => {
        const messageElement = document.createElement('div');
        messageElement.innerText = message;
        messageElement.classList.add('message');
        messageElement.classList.add(position);
        messageContainer.append(messageElement);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = messageInput.value;
        append(`You: ${message}`, 'right');
        socket.emit('send', message);
        messageInput.value = '';
    });

    const name = prompt("Enter your name to join");
    console.log(name);
    socket.emit('new-user-joined', name);

    socket.on('user-joined', name => {
        append(`${name} joined the chat`, 'left');
    });

    socket.on('receive', data => {
        append(`${data.name}: ${data.message}`, 'left');
    });

    socket.on('left', name => {
        append(`${name} left the chat`, 'left');
    });
});