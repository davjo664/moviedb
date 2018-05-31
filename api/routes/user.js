import express from 'express';
import User from '../models/user';

const router = express.Router();

// Add user
router.post('/register', (req, res) => {
    let userObj = req.body;
    User.addUser(userObj, (err) => {
        if(err) {
            console.log("Failed to add user");
            console.log(err);
            res.send("error");
        } else {
            res.send("Added user");
        }
    })
});

// Delete user
router.post('/unregister', (req, res) => {
    User.deleteUser(req, (err) => {
        if(err) {
            console.log("Failed to delete user");
            console.log(err);
            res.send("error");
        } else {
            res.send("Deleted user");
        }
    })
});

export default router;