var mongoose = require('mongoose')


var interaction = new mongoose.Schema({
    class: String,
    text: String,
    username: String,
    date: {
        type: Date,
        default: Date.now()
    }
})


const Interaction = mongoose.model('Interaction', interaction)

module.exports = Interaction;