import { Strategy } from 'passport-local';
import User from '../models/user';
import bcrypt from 'bcryptjs';

const LocalStrategy = Strategy;

const passportConfig = (passport) => {
    // Local Strategy
    passport.use(new LocalStrategy((username, password, done) => {
      // Match Username
      let query = {username:username};
      User.findOne(query, (err, user) => {
        if (err) throw err;
        if (!user) {
          return done(null, false, {message: 'No user found'});
        }
  
        // Match Password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, {message: 'Wrong password'});
          }
        });
      });
    }));
  
    passport.serializeUser((user, done) => {
      done(null, user.id);
    });
  
    passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => {
        done(err, user);
      });
    });
  }

  export default passportConfig;