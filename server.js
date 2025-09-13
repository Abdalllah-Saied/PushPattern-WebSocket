const http = require('http');
const webSocketServer = require('websocket').server;

let connections = [];
let userCounter = 0;

const httpServer = http.createServer() 

const webSocket = new webSocketServer({ "httpServer": httpServer });

httpServer.listen(8080, () => {
    console.log("Server is running on port 8080");
});

webSocket.on('request', (request) => {
    const connection = request.accept(null, request.origin);
    
    userCounter++;
    connection.userId = userCounter;
    connection.userName = `User${userCounter}`;
    
    connections.push(connection);
    
    console.log(`${connection.userName} connected (${connections.length} users online)`);
    
    // Notify all connections that a new user joined
    connections.forEach(conn => {
        if (conn !== connection) {
            conn.sendUTF(`${connection.userName} joined the chat`);
        }
    });

    connection.on("message", message => {
        console.log(`${connection.userName}: ${message.utf8Data}`);
        // Broadcast message to all connections (including sender)
        connections.forEach(conn => {
            conn.sendUTF(`${connection.userName}: ${message.utf8Data}`);
        });
    });

    connection.on("close", () => {
        console.log(`${connection.userName} disconnected (${connections.length - 1} users remaining)`);
        // Remove connection from array
        connections = connections.filter(c => c !== connection);
        // Notify remaining connections that user left
        connections.forEach(conn => {
            conn.sendUTF(`${connection.userName} left the chat`);
        });
    });
});