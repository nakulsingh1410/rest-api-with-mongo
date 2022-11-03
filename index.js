const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const alientRouter = require('./routes/alien')

const PORT = process.env.PORT || 8100
const uri = 'mongodb://localhost:27017/DemoDB'
const app = express()


// async function connect() {
//     try {
//         await mongoose.connect(uri)
//         console.log('Conncted to MongoDB')
//     } catch (error) {
//         console.log(error)
//     }
// }
// connect()

app.use(cors())
app.use(express.json())
app.use('/aliens', alientRouter)

app.get('/', async(req, res) => {
    res.send('Hi This is my app: Nakul :)')
}) 

app.get('/test', async(req, res) => {
    res.send('Every thing is working in correct way')
}) 

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})