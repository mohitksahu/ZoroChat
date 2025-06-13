# ZoroChat

![ZoroChat Logo](zoroLogo.jpeg)

A real-time group chat application built with Node.js, Express, and Socket.io that allows users to chat together in a single room.

## 📋 Features

- **Real-time Messaging**: Instant message delivery through WebSockets
- **User Notifications**: Alerts when users join or leave the chat
- **Participant Counter**: Shows the number of active users in the chat
- **Responsive Design**: Works on both desktop and mobile devices
- **Clean UI**: Modern interface with dark theme

## 🚀 Live Demo

*Currently deployed locally. To access, run the server and navigate to http://localhost:3000*

## 📦 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap
- **Backend**: Node.js, Express.js
- **Real-time Communication**: Socket.io
- **Icons**: Font Awesome

## 🔧 Installation & Setup

1. **Clone the repository**
   ```
   git clone https://github.com/yourusername/ZoroChat.git
   cd ZoroChat
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Start the server**
   ```
   node index.js
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`

## 🛠️ Development

To run the application in development mode with automatic server restarts:

```
npx nodemon index.js
```

## 📱 How to Use

1. Enter your name when prompted
2. Type your message in the input field
3. Press Enter or click the send button to send your message
4. You'll see other participants' messages appear on the left side of the screen
5. Your messages will appear on the right side
6. The participant count updates automatically as users join or leave

## 📄 Project Structure

```
ZoroChat/
├── chat.png            # Chat preview image
├── css/
│   └── style.css       # Styling for the application
├── index.html          # Main HTML file
├── index.js            # Server-side code
├── js/
│   └── client.js       # Client-side JavaScript
├── package.json        # Project dependencies
└── zoroLogo.jpeg       # Application logo
```

## 📌 Future Enhancements

- Multiple chat rooms
- Private messaging
- User authentication
- Message history
- File sharing
- Emoji support
- Typing indicators

## 👨‍💻 Author

Made with ❤️ by Mohit

## 📜 License

ISC

---

**Note**: To deploy this application online, you'll need to update the Socket.io connection URL in `client.js` to point to your deployed server address instead of localhost.
