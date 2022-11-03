const express = require('express')
const Alien = require('../models/alien')

const router = express.Router()

router.get('/', async (req, res) => {
     try {
        const aliens = await Alien.find()
        console.log(`req received :${req.body}`)
        res.json(aliens)
    } catch(error) {
        res.send('Error ' + error)
    }
})

router.post('/', async (req, res) => {
    const alient = new Alien({
        name: req.body.name,
        type: req.body.type
    })
    console.log(req)
    try {
        const result = await alient.save()
        res.json(result)
    } catch (err) {
        res.send(err)
    }
})


module.exports = router
