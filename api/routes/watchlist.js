// CRUD routes for watchlist

import express from 'express';
import Watchlist from '../models/watchlist';

const router = express.Router();

// Access control
const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.send('Not logged in');
    }
}

// Add movie to watchlist
router.post('/', ensureAuthenticated, (req, res) => {
    let watchlistObj = req.body;
    watchlistObj.userid = req.user._id;

    Watchlist.addMovieToWatchlist(watchlistObj, (err) => {
        if(err) {
            console.log("Failed to add to watchlist");
            console.log(err);
            res.send("error");
        } else {
            res.send("Added movie to watchlist");
        }

    })
});

// Get watchlist for user
router.get('/', ensureAuthenticated, (req, res) => {
    let userId = req.user._id;
    Watchlist.getWatchlist(userId, (err, watchlist) => {
        if(err) {
            console.log("Failed to find watchlist");
            res.json({});
        }
        res.json(watchlist);
    })
});

// Edit movie from watchlist
router.put('/:id', ensureAuthenticated, (req, res) => {
    Watchlist.updateWatchlistMovie(req, (err) => {
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
    Watchlist.deleteWatchlistMovie(req, (err) => {
        if(err) {
            console.log("Failed to delete watchlist movie");
            console.log(err);
            res.send("error");
        }

        //TODO: Always sends this, even if no record was deleted
        res.send("Watchlist movie deleted");
    })
});

export default router;