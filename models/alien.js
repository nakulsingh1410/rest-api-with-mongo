const mongoose  = require('mongoose')

const alienSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    }
})


module.exports = mongoose.model('Alien', alienSchema)