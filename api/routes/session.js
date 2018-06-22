import express from 'express';
import passport from 'passport';

const router = express.Router();

// Login Process
router.post('/login', function(req, res, next){
    passport.authenticate('local', (err, user, info) => {
        if (!user) { return res.status(403).send('Not logged in'); }
        req.logIn(user, (err) => {
            return res.send(user);
        })
    })(req, res, next);
});

// Logout Process
router.post('/logout', (req, res) => {
    // Passport logout
    req.logout();
    res.send();
})

export default router;