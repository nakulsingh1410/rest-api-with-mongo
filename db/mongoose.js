var mongoose =  require('mongoose')

const uri =  process.env.MONGODB_URI || 'mongodb://localhost:27017/TestApp'


mongoose.Promise = global.Promise
mongoose.connect(uri)


module.exports = { mongoose }