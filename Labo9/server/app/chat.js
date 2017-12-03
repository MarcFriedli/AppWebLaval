class ChatServer {
    constructor(http) {
        this.io = require('socket.io')(http);
        this.io.on('connection', this.onConnection.bind(this));
    }

    onConnection(socket) {
        if (!socket.on) {
            return;
        }
        console.log('a user connected');
        this.io.emit('toto', "A user connected");

        socket.on('message', this.onMessage.bind(this, socket));
        socket.on('disconnect', this.onDisconnect.bind(this));
    }

    onMessage(socketEmmiter, message) {
        this.io.emit('message', message)
    }

    onDisconnect(socket) {
        this.io.emit('disconnection', "A user disconnected");
        console.log('user disconnected');
    }


}

module.exports = ChatServer;