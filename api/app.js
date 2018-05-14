import express from 'express';
import fetch from 'isomorphic-fetch';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';

import User from './models/user';
import watchlistRoute from './routes/watchlist';
import movieRoute from './routes/movie';
import userRoute from './routes/user';
import dbConfig from './config/database';
import passportConfig from './config/passport';

const app = express();

// Middlewares
// Body parser to be able to read req.body.
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
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

passportConfig(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Save the user globally
app.get('*', (req, res, next) => {
    // Passport saves user in req.user
    res.locals.user = req.user || null;
    next();
})


// Connect to Mongoose
mongoose.connect(dbConfig.database);
var db = mongoose.connection;

// Check connection
db.once('open', () => {
    console.log("Connected to MongoDB");
})

// Check for DB errors
db.on('error', (err) => {
    console.log(err);
})

// Routes
app.use('/api/watchlist', watchlistRoute);
app.use('/api/movie', movieRoute);
app.use('/api/user', userRoute);

app.get('/api/login', (req, res) => {
    console.log("login")
    console.log(req.query);

    res.json({});
});

// User.getUser((err, user) => {
//     if(err) {
//         throw err;
//     }
//     console.log(user);
// }, "test@gmail.com");

app.listen(3000);
console.log('Running on port 3000...');