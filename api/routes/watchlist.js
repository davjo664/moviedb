// CRUD routes for watchlist

import express from 'express';
import User from '../models/user';

const router = express.Router();

// Access control
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status(403).json({ error: req.headers })
    }
}

// Add movie to watchlist
router.post('/', ensureAuthenticated, (req, res) => {
    let watchlistObj = req.body;
    watchlistObj.userid = req.user._id;
    User.addMovieToWatchlist(watchlistObj, (err, user) => {
        if(err) {
            res.send(err);
        } else {
            res.json(user.movies[user.movies.length-1]);
        }

    })
});

// Get watchlist for user
router.get('/', ensureAuthenticated, (req, res) => {
    let userId = req.user._id;
    User.getWatchlist(userId, (err, watchlist) => {
        if(err) {
            console.log("Failed to find watchlist");
            res.json({});
        }
        res.json(watchlist[0].movies);
    })
});

// Edit movie from watchlist
router.put('/:id', ensureAuthenticated, (req, res) => {
    User.updateWatchlistMovie(req, (err) => {
        if(err) {
            console.log("Failed to edit watchlist");
            console.log(err);
            res.send("error");
        }
        res.send("Watchlist movie edited");
    })
});

// Delete movie from watchlist
router.delete('/:id', ensureAuthenticated, (req, res) => {
    User.deleteWatchlistMovie(req, (err) => {
        if(err) {
            console.log("Failed to delete watchlist movie");
            console.log(err);
            res.send("error");
        }

        res.send("Watchlist movie deleted");
    })
});

export default router;