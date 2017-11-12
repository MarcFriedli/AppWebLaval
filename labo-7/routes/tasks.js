import express from 'express';
import db from '../lib/db';

const router = express.Router();

router.get('/:userId/tasks', (req, res) => {
    let user = db.getUser(req.params.userId);
    if (user === undefined) {
        res.status(404);
        res.send({});
        return;
    }
    res.send({tasks: user.tasks});
});
router.post('/:userId/tasks', (req, res) => {
    let user = db.getUser(req.params.userId);
    if (user === undefined) {
        res.status(404);
        res.send({});
        return;
    }
    console.log("MDR");
    // console.log(request.body);
    let name = req.body.name;
    res.send({id: user.addTask(name), name: name});
});
router.put('/:userId/tasks/:id', (req, res) => {
    let user = db.getUser(req.params.userId);
    if (user === undefined) {
        res.status(404);
        res.send({});
        return;
    }


});
router.delete('/:userId/tasks/:id', (req, res) => {
    let user = db.getUser(req.params.userId);
    if (user === undefined) {
        res.status(404);
        res.send({});
        return;
    }


});

export default router;
