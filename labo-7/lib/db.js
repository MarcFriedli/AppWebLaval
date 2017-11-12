import User from '../lib/user';



class Db {

    constructor() {
        this.users = [];
    }

    addUser() {
        this.users.push(new User(this.users.length));
        return this.users.length - 1;
    }

    getUser(userId) {
        return this.users[userId];
    }

}

export default new Db();