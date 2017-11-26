class ChatServer {
    constructor(http) {
        this.io = require('socket.io')(http);
        this.sockets = [];
        this.io.on('connection', this.onConnection.bind(this));

    }

    onConnection(socket) {
        console.log('a user connected');
        socket.on('message', this.onMessage.bind(this, socket));
        socket.on('disconnect', this.onDisconnect.bind(this));
        this.sendMessageToAllExcept(socket, 'connection', 'A user connected');
        this.sockets.push(socket);
    }

    onMessage(socketEmmiter, message) {
        console.log("message : ", message);
        this.sendMessageToAllExcept(socketEmmiter, 'message', message);
    }

    onDisconnect(socket) {
        this.sockets.splice(this.sockets.indexOf(socket), 1);
        this.sendMessageToAllExcept(socket, 'disconnection', "A user disconnected");
        console.log('user disconnected');
    }

    sendMessageToAllExcept(exception, eventName, message) {
        this.sockets.forEach((socket) => {
            if (socket === exception) {
                return;
            }
            socket.emit(eventName, message);
        })
    }

}

module.exports = ChatServer;