require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const alientRouter = require('./routes/alien')

const PORT = process.env.PORT || 8100
/*
const localDbUri = 'mongodb://localhost:27017/DemoDB'
const atlsUri = 'mongodb+srv://rest-api-db:Ivanka%401234@cluster0.tyc5xzg.mongodb.net/apiTestApp'
*/

const app = express()


async function connect() {
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log('Conncted to MongoDB')
    } catch (error) {
        console.log(error)
    }
}
connect()

app.use(cors())
app.use(express.json())
app.use('/aliens', alientRouter)

app.get('/', async(req, res) => {
    res.send('Nice to meet you, this is Nakul :)')
}) 

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})