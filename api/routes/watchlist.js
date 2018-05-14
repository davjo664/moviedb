// CRUD routes for watchlist

import express from 'express';
import Watchlist from '../models/watchlist';

const router = express.Router();

// Add movie to watchlist
router.post('/', (req, res) => {
    let watchlistObj = req.body;

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
router.get('/:userid', (req, res) => {
    let userId = req.params.userid;
    Watchlist.getWatchlist(userId, (err, watchlist) => {
        if(err) {
            console.log("Failed to find watchlist");
            return;
        }
        res.json(watchlist);
    })
});

// Edit movie from watchlist
router.put('/:id', (req, res) => {
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
router.delete('/:id', (req, res) => {
    let watchlistMovieId = req.params.id;
    Watchlist.deleteWatchlistMovie(watchlistMovieId, (err) => {
        if(err) {
            console.log("Failed to delete watchlist movie");
            console.log(err);
            res.send("error");
        }
        res.send("Watchlist movie deleted");
    })
});

export default router;