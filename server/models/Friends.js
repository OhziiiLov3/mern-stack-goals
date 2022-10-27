const mongoose = require('mongoose')

const FriendSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    }
});

module.exports = mongoose.model('Friend', FriendSchema )