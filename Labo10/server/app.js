const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'UPDATE'],
    credentials: true
};
const uuidv4 = require('uuid/v4');

const port = process.env.PORT || 8080;
const app = express();

const users = [];
const userTasks = {};
const MongoClient = require('mongodb').MongoClient;

var mgUrl = 'mongodb://u0rsu7frhbl4v9u:0lEOGt3OA1yyBMvdso5u@bn2nudswdijcous-mongodb.services.clever-cloud.com:27017/bn2nudswdijcous';

var mongoose = require('mongoose');
mongoose.connect(mgUrl, { useMongoClient: true });
mongoose.Promise = global.Promise;

var Task = mongoose.model('Task', { name: String });
var User = mongoose.model('User', { name: String });

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use(function (error, req, res, next) {
    if (error instanceof SyntaxError) {
        res.status(400).send({
            errorCode: 'PARSE_ERROR',
            message: 'Arguments could not be parsed, make sure request is valid.'
        });
    } else {
        res.status(500).send('Something broke server-side.', error);
    }
});

app.get('/', function(req, res) {
    res.send('Welcome to Lab 4 API.');
});

app.post('/users', function(req, res) {
    const userId = uuidv4();
    users.push(userId);

    return res.status(200).send(JSON.stringify({'id': userId}));
});

app.get('/:userId/tasks', function(req, res) {
    const userId = req.params.userId;

    ensureUserExist(userId, res, function() {
        const tasks = getUserTasks(userId);

        return res.status(200).send(JSON.stringify({'tasks': tasks}));
    });
});

app.post('/:userId/tasks', function(req, res) {
    const userId = req.params.userId;

    ensureUserExist(userId, res, function() {
        ensureValidTask(req.body, res, function() {
            const task = {id: uuidv4(), name: req.body.name};
            const tasks = getUserTasks(userId);
            tasks.push(task);

            userTasks[userId] = tasks;

            return res.status(200).send(JSON.stringify(task));
        });
    });

});

app.put('/:userId/tasks/:taskId', function(req, res) {
    const taskId = req.params.taskId;
    const userId = req.params.userId;

    ensureUserExist(userId, res, function() {
        ensureValidTask(req.body, res, function() {
            editTasks(userId, taskId, res, function(tasks, taskIndex){
                tasks[taskIndex].name = req.body.name;
            }, function(task) {
                return res.status(200).send(JSON.stringify(task));
            });
        });
    });
});

app.delete('/:userId/tasks/:taskId', function(req, res) {
    const taskId = req.params.taskId;
    const userId = req.params.userId;

    ensureUserExist(userId, res, function() {
        editTasks(userId, taskId, res, function(tasks, taskIndex) {
            tasks.splice(taskIndex, 1);
        }, function() {
            return res.sendStatus(204);
        });
    });
});

app.listen(port, function() {
    console.log('Server listening.')
});

function ensureValidTask(task, res, callback) {
    if (task.name === undefined || task.name === '') {
        return res.status(400).send('Task definition is invalid.');
    }

    callback();
}

function ensureUserExist(userId, res, callback) {
    if (users.indexOf(userId) === -1) {
        return res.status(400).send('User with id \'' + userId + '\' doesn\'t exist.');
    }

    callback();
}

function editTasks(userId, taskId, res, functionToPerform, callback) {
    const tasks = getUserTasks(userId);

    var existingTask = undefined;
    var taskIndex = -1;

    tasks.forEach(function(task, index) {
        if (task.id === taskId) {
            existingTask = task;
            taskIndex = index;
        }
    });

    if (taskIndex === -1) {
        return res.status(400).send('Task with id \'' + taskId + '\' doesn\'t exist.');
    } else {
        functionToPerform(tasks, taskIndex);
    }

    userTasks[userId] = tasks;
    callback(existingTask);
}

function getUserTasks(userId) {
    return userTasks[userId] || [];
};
