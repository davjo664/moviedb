import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// User schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const User = mongoose.model('Users', userSchema);
// Add User
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

export default User;
