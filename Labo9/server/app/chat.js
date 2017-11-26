class ChatServer {
    constructor(http) {
        this.io = require('socket.io')(http);
        this.sockets = [];
        this.io.on('connection', this.onConnection.bind(this));

    }

    onConnection(socket) {
        if (!socket.on) {
            return;
        }
        console.log('a user connected');
        socket.on('message', this.onMessage.bind(this, socket));
        socket.on('disconnect', this.onDisconnect.bind(this));
        this.io.emit('connection', "A user connected");
        this.sockets.push(socket);
    }

    onMessage(socketEmmiter, message) {
        this.io.emit('message', message)
        // this.sendMessageToAll('message', message);
    }

    onDisconnect(socket) {
        let s = this.sockets.findIndex((s) => s.id === socket.id);
        console.log(s, socket.id);
        // this.sockets.splice(this.sockets.indexOf(socket), 1);
        console.log(this.sockets.indexOf(s));
        this.io.emit('disconnection', "A user disconnected");
        console.log('user disconnected');
    }


}

module.exports = ChatServer;