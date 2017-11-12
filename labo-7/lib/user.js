export default class {
    constructor(id) {
        this.id = id;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({id: this.tasks.length, name: task});
        return this.tasks.length - 1;
    }

    edit(taskId, value) {
        console.log('edit, id : ' + taskId);
        let ts = this.tasks.filter((task) => task.id == taskId);
        if (ts.length !== 1) {
            return false;
        }
        ts[0].name = value;
    }

    removeTask(taskId) {
        let ts = this.tasks.filter((task) => task.id == taskId);
        if (ts.length !== 1) {
            return false;
        }
        this.tasks.splice(this.tasks.indexOf(ts[0]), 1);
        return true;
    }
}