import express from 'express';
import User from '../models/user';
import passport from 'passport';

const router = express.Router();

// Add user
router.post('/', (req, res) => {
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

// Login Process
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        sucessRedirect: '/'
    })(req, res, next);
})

// Logout Process
router.post('/logout', (req, res) => {
    // Passport logout
    req.logOut();
})

export default router;