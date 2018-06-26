import express from 'express';

const router = express.Router();

let genresMap = new Map();

// Load genres from themoviedb API
fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=dc26abc8af32720ec9f3dc483dc521ae')
.then((res) => res.json())
.then((genres) => {
    genres.genres.forEach((genre) => {
        genresMap.set(genre.name, genre.id);
    })
})

// Get movie details by id from themoviedb API
router.get('/:id', (req, res) => {
    // Get movie with specific id
    // and include key to youtube trailers https://www.youtube.com/watch?v=SUXWAEX2jlg
    let movieId = req.params.id;
    
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=dc26abc8af32720ec9f3dc483dc521ae`)
    .then((movieRes) => movieRes.json())
    .then((movie) => {
        let movieTitle = movie.title;
        res.json(movie);
    })
});

// Find movies based on query params from themoviedb API
router.get('/', (req, res) => {
    // Get movies by genre sorted by rating
    // 20 per page. To get next page add &page=2

    if (req.query.genre && req.query.page) {
        let genre = req.query.genre;
        let genreId = genresMap.get(genre);
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=dc26abc8af32720ec9f3dc483dc521ae&with_genres=${genreId}&page=${req.query.page}&sort_by=popularity.desc&vote_count.gte=100`)
        .then((genreRes) => genreRes.json())
        .then((movies) => {
            res.json(movies);
        })
    } else if (req.query.search != null && req.query.page) {
        if (!req.query.search) {
            res.json([]);
        }
        const url = `https://api.themoviedb.org/3/search/movie?api_key=dc26abc8af32720ec9f3dc483dc521ae&query=${req.query.search}&page=${req.query.page}`;
        fetch(url)
        .then((searchRes) => searchRes.json())
        .then((movies) => {
            res.json(movies);
        })
    } else {
        res.send('Specify query params');
    }
});

export default router;