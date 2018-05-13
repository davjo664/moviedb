import express from 'express';
import fetch from 'isomorphic-fetch';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import Watchlist from './models/watchlist';
import User from './models/user';

const app = express();
let genresMap = new Map();

// Middlewares

// Body parser to be able to read req.body.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Log requests
app.use(morgan("common"));

// Security middleware that handles several kinds of attacks in the HTTP/HTTPS protocols
app.use(helmet()); 

// Allow only access to endpoints from http://localhost:3000
app.use(cors({  
    origin: ["http://localhosta:3000"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// Connect to Mongoose
mongoose.connect('mongodb://localhost/moviedb');
var db = mongoose.connection;

// Check connection
db.once('open', () => {
    console.log("Connected to MongoDB");
})

// Check for DB errors
db.on('error', (err) => {
    console.log(err);
})

app.get('/api', (req, res) => {
    res.send('Use /api/login or /api/watchlist');
});

app.get('/api/login', (req, res) => {
    console.log("login")
    console.log(req.query);

    res.json({});
});

app.get('/api/watchlist', (req, res) => {
    Watchlist.getWatchlist((err, watchlist) => {
        console.log("watchlist")
        if(err) {
            throw err;
        }
        res.json(watchlist);
    })
});

app.post('/api/watchlist', (req, res) => {
    Watchlist.addToWatchlist(req, (err) => {
        if(err) {
            console.log("Failed to add to watchlist");
            return;
        } else {
            res.send("Added to watchlist");
        }

    })
});

app.get('/api/movie/:id', (req, res) => {
    // Get movie with specific id
    // and include key to youtube trailers
    let movieId = req.params.id;
    
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=dc26abc8af32720ec9f3dc483dc521ae&append_to_response=videos`)
    .then((movieRes) => movieRes.json())
    .then((movie) => {
        let movieTitle = movie.original_title;
        res.json(movieTitle);
    })
});

app.get('/api/movie/genre/:genre', (req, res) => {
    let genre = req.params.genre;
    let genreId = genresMap.get(genre);
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=dc26abc8af32720ec9f3dc483dc521ae&with_genres=${genreId}&sort_by=vote_average.desc`)
    .then((genreRes) => genreRes.json())
    .then((movies) => {
        res.json(movies);
    })

    // https://www.youtube.com/watch?v=SUXWAEX2jlg
    // Get sci-fi movies sorted by rating
    // 20 per page. To get next page add &page=2
    // https://api.themoviedb.org/3/discover/movie?api_key=dc26abc8af32720ec9f3dc483dc521ae&with_genres=878&sort_by=vote_average.desc
});

User.getUser((err, user) => {
    if(err) {
        throw err;
    }
    console.log(user);
}, "test@gmail.com");

// Load genres
fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=dc26abc8af32720ec9f3dc483dc521ae')
.then((res) => res.json())
.then((genres) => {
    genres.genres.forEach((genre) => {
        genresMap.set(genre.name, genre.id);
    })
})

app.listen(3000);
console.log('Running on port 3000...');