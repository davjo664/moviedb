import mongoose from 'mongoose';

// Watchlist schema
const watchlistSchema = mongoose.Schema({
    movieid: {
        type: String,
        required: true
    },
    userid: {
        type: Number,
        required: true
    },
    watched: {
        type: Boolean,
        default: false
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

const Watchlist = mongoose.model('Watchlists', watchlistSchema);
Watchlist.getWatchlist = (userId, callback) => {
    Watchlist.find({ userid: userId }).exec(callback);
}
Watchlist.updateWatchlistMovie = (req, callback) => {
    let watchlistObj = req.body;
    Watchlist.findOneAndUpdate(
        { _id: req.params.id},
        { "watched" : watchlistObj.watched }
    ).exec(callback);
}
Watchlist.addMovieToWatchlist = (watchlistObj, callback) => {
    let watchlistMovie = new Watchlist(watchlistObj);
    watchlistMovie.save(callback);
}
Watchlist.deleteWatchlistMovie = (watchlistMovieId, callback) => {
    Watchlist.remove({ _id: watchlistMovieId}, callback);
}

export default Watchlist;