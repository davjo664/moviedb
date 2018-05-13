import mongoose from 'mongoose';

// User schema
const userSchema = mongoose.Schema({
    userid: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('Users', userSchema);
// Get User
User.getUser = (callback, email) => {
    User.find(callback).where('email', email);
}

export default User;
