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
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

const Watchlist = mongoose.model('Watchlists', watchlistSchema);
Watchlist.getWatchlist = (callback, limit) => {
    Watchlist.find(callback).limit(limit);
}
Watchlist.addToWatchlist = (req, callback) => {
    let movie = new Watchlist();
    movie.movieid = req.query.movieid;
    movie.userid = req.query.userid;
    movie.watched = req.query.watched;
    movie.save(callback);
}

export default Watchlist;