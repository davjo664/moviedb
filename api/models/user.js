import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export const movieSchema = mongoose.Schema({
    movieid: {
        type: String,
        required: true
    },
    watched: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    vote_average: {
        type: String,
        required: true
    },
    vote_count: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true
    },
    poster_path: {
        type: String,
        required: true
    },
})

// User schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    movies: [movieSchema]
});

const User = mongoose.model('Users', userSchema);

// User Create and Delete
User.addUser = (userObj, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(userObj.password, salt, (err, hash) => {
            if (err) {
                console.log(err);
            }
            userObj.password = hash;
            let newUser = new User(userObj);
            newUser.save(callback);
        });
    });
}

User.deleteUser = (req, callback) => {
    User.findById(req.user._id).remove(callback);
}

// User watchlist CRUD
User.addMovieToWatchlist = (watchlistObj, callback) => {
    User.findById(watchlistObj.userid)
    .then((user) => {
        user.movies.push(watchlistObj);
        return user.save(callback);
    })
}

User.getWatchlist = (userId, callback) => {
    User.find({ _id: userId }).exec(callback);
}

User.updateWatchlistMovie = (req, callback) => {
    let watchlistObj = req.body;
    console.log("UPDATE");
    console.log(req.body);
    User.findById(req.user._id)
    .then((user) => {
        const movie = user.movies.id(req.params.id);
        movie.watched = watchlistObj.watched;
        return user.save(callback);
    })
}

User.deleteWatchlistMovie = (req, callback) => {
    User.findById(req.user._id)
    .then((user) => {
        console.log("DELETE");
        console.log(req.params.id);
        user.movies.id(req.params.id).remove();
        return user.save(callback);
    })
}

export default User;
