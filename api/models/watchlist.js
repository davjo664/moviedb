import mongoose from 'mongoose';

// Watchlist schema
const watchlistSchema = mongoose.Schema({
    movieid: {
        type: String,
        required: true
    },
    userid: {
        type: String,
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
    Watchlist.update({ _id: req.params.id, userid: req.user._id}, { "watched" : watchlistObj.watched }).exec(callback);
}
Watchlist.addMovieToWatchlist = (watchlistObj, callback) => {
    let watchlistMovie = new Watchlist(watchlistObj);
    watchlistMovie.save(callback);
}
Watchlist.deleteWatchlistMovie = (req, callback) => {
    Watchlist.remove({ _id: req.params.id, userid: req.user._id}).exec(callback);
}

export default Watchlist;