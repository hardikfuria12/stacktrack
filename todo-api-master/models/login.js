var mongoose = require('mongoose')

var LoginHistorySchema = new mongoose.Schema({
    sessionID: String,
    username: String,
    loginTime: Date,
    logoutTime: Date
})


const Login = mongoose.model('Login', LoginHistorySchema)

module.exports = Login;