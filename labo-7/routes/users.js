import express from 'express';
import db from '../lib/db';
import User from '../lib/user';

const router = express.Router();

router.post('/', (req, res) => {
    let id = db.addUser();
    res.json({
        id: id
    });
});

export default router;
