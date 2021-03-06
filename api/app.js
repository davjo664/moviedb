//TODO:

// Get rid of the fetch dependecies, can use node requests instead
// Rename the routes to plural

import express from 'express';
import fetch from 'isomorphic-fetch';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';
import session from 'express-session';

import User from './models/user';
import watchlistRoute from './routes/watchlist';
import movieRoute from './routes/movie';
import userRoute from './routes/user';
import sessionRoute from './routes/session';
import dbConfig from './config/database';
import passportConfig from './config/passport';
import config from './config/config';

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

// Init app
const app = express();

// Middlewares
// Body parser to be able to read req.body.
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())

// Log requests
app.use(morgan("common"));

// Security middleware that handles several kinds of attacks in the HTTP/HTTPS protocols
app.use(helmet()); 

// Allow only access to endpoints from app url
app.use(cors({credentials: true, origin: config.app.url}));

// Express Session Middleware
// Stored in application memory for now
app.use(session({
    secret: 'topsecret',
    resave: true,
    saveUninitialized: true
  }));

// Setup passport config
passportConfig(passport);
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Home Route
app.get('/', function(req, res){
    res.send("Home");
});

// Routes
app.use('/api/watchlist', watchlistRoute);
app.use('/api/movie', movieRoute);
app.use('/api/user', userRoute);
app.use('/api/session', sessionRoute);

app.listen(3001);
console.log('Running on port 3001...');
