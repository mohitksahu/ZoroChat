document.addEventListener('DOMContentLoaded', () => {
    // Replace this URL with your ngrok URL when testing
    const socket = io('https://fc90-152-58-142-129.ngrok-free.app', {
        transports: ['websocket']
    });

    const messageInput = document.getElementById('messageInp');
    const messageContainer = document.querySelector(".message-container");

    socket.on('connect', () => {
        console.log('Connected to the server');
    });

    socket.on('connect_error', (err) => {
        console.log('Connection error:', err);
    });

    const append = (message, position) => {
        const messageElement = document.createElement('div');
        messageElement.innerText = message;
        messageElement.classList.add('message', position);
        messageContainer.append(messageElement);
        messageContainer.scrollTop = messageContainer.scrollHeight; // Auto-scroll to bottom
    };

    document.getElementById('sendBtn').addEventListener('click', (e) => {
        const message = messageInput.value;
        if (message) {
            append(`You: ${message}`, 'right');
            socket.emit('send', message);
            messageInput.value = '';
        }
    });

    const name = prompt("Enter your name to join");
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
