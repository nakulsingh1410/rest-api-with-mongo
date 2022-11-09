const express = require('express')
const mongoose = require('mongoose')
const alientRouter = require('./routes/alien')

const PORT = process.env.PORT | 8200
const uri = 'mongodb+srv://rest-api-db:Ivanka%401234@cluster0.tyc5xzg.mongodb.net/apiTestApp'
const app = express()

// mongoose.connect(uri, {
//                 useNewUrlParser: true,
//                 useUnifiedTopology: true
//             })
//             .then(() => {
//                 console.log("Db connected")
//             })


async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Conncted to MongoDB')
    } catch (error) {
        console.log(error)
    }
}
connect()

app.use(express.json())
app.use('/aliens', alientRouter)

app.get('/aliens', async(req, res) => {
    try {
        const aliens = await Alien.find()
        console.log(`req received :${req.body}`)
        res.json(aliens)
    } catch(error) {
        res.send('Error ' + error)
    }
}) 

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})