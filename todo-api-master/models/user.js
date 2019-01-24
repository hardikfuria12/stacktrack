var mongoose = require('mongoose')


var userDetails = new mongoose.Schema({
    username: String,
    password: String
})


const User = mongoose.model('User', userDetails)

module.exports = User;