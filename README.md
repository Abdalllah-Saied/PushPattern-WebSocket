# WebSocket Chat Application

A real-time chat application built with Node.js and WebSockets, featuring a simple server and HTML client interface.

## Features

- 🚀 **Real-time messaging** - Instant message delivery using WebSocket connections
- 👥 **Multi-user support** - Multiple users can join and chat simultaneously
- 🎯 **User identification** - Each user gets a unique identifier (User1, User2, etc.)
- 💬 **Message broadcasting** - Messages are sent to all connected users
- 🔄 **Connection management** - Automatic handling of user joins and disconnections
- 📱 **Responsive UI** - Clean, modern chat interface with connection status indicators

## Project Structure

```
push/
├── server.js          # WebSocket server implementation
├── client.html        # HTML client interface
├── package.json       # Node.js dependencies
├── package-lock.json  # Dependency lock file
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## Prerequisites

- Node.js (v14 or higher)
- A modern web browser with WebSocket support

## Installation

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd push
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Usage

### Starting the Server

1. **Run the WebSocket server**
   ```bash
   node server.js
   ```

2. **Server will start on port 8080**
   ```
   Server is running on port 8080
   ```

### Using the Chat Client

1. **Open the client in your browser**
   - Open `client.html` in any modern web browser
   - Or serve it through a web server if needed

2. **Connect to the chat**
   - Click the "Connect" button
   - You'll see "Connected to server" status

3. **Start chatting**
   - Type messages in the input field
   - Press Enter or click "Send" to send messages
   - See your messages and others' messages in real-time

### Testing Multiple Users

To test with multiple users:
1. Open multiple browser tabs/windows with `client.html`
2. Connect each tab to the server
3. Send messages from different tabs to see the chat functionality

## How It Works

### Server (`server.js`)

- **HTTP Server**: Creates an HTTP server on port 8080
- **WebSocket Server**: Attaches WebSocket functionality to the HTTP server
- **Connection Management**: Tracks all connected users and assigns unique IDs
- **Message Broadcasting**: Forwards messages from one user to all others
- **User Notifications**: Announces when users join or leave the chat

### Client (`client.html`)

- **WebSocket Connection**: Connects to the server using the WebSocket API
- **Real-time UI**: Updates the chat interface in real-time
- **Connection Status**: Shows connection status and handles reconnection
- **Message Handling**: Sends and receives messages with proper formatting

## API Reference

### WebSocket Events

#### Server Events
- `request` - New connection request
- `message` - Incoming message from client
- `close` - Client disconnected

#### Client Events
- `open` - Connection established
- `message` - Message received from server
- `close` - Connection closed
- `error` - Connection error occurred

### Message Format

Messages are sent as UTF-8 strings in the following format:
- **User messages**: `"User1: Hello world"`
- **Join notifications**: `"User2 joined the chat"`
- **Leave notifications**: `"User1 left the chat"`

## Configuration

### Server Port
To change the server port, modify line 10 in `server.js`:
```javascript
httpServer.listen(8080, () => {
```

---

**Happy Chatting! 🎉**
