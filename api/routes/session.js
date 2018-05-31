import express from 'express';
import passport from 'passport';

const router = express.Router();

// Login Process
router.post('/login', function(req, res, next){
    passport.authenticate('local', {
      successRedirect:'/',
      failureRedirect:'/',
    })(req, res, next);
  });

// Logout Process
router.post('/logout', (req, res) => {
    // Passport logout
    req.logout();
    res.redirect('/');
})

export default router;