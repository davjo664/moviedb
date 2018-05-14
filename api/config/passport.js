import passportLocal from 'passport-local';
import User from '../models/user';
import dbConfig from '../config/database';
import bcrypt from 'bcryptjs';

const LocalStrategy = passportLocal.Strategy;

export default (passport) => {

    // Local Strategy
    passport.use(new LocalStrategy((username, password, done) => {
        console.log("PASSPORT");
        console.log(username);
        console.log(password);
        // Match Username
        let query = {username: username}
        User.findOne(query, (err, user) => {
            if (err) {
                throw err;
            }
            if (user) {
                // Match Password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    console.log("compare")
                    if (err) throw err;
                    if (isMatch) {
                        console.log("Is match")
                        return done (done, user);
                    } else {
                        console.log("password dont match")
                        return done(null, false, {message: 'No user matched username/password'})
                    }
                });
            } else {
                console.log("username dont match")
                return done(null, false, {message: 'No user matched username/password'})
            }
        });
    }))

    passport.serializeUser( (user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser( (id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

}