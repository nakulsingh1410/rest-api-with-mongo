const { success, error, validation } = require('../response-api');
const express = require('express')
const Alien = require('../models/alien')

const router = express.Router()

// get all aliens
router.get('/', async (req, res) => {
     try {
        const aliens = await Alien.find()
        res.status(200).json(success(
                    "success",
                    aliens,
                    res.statusCode));
    } catch(err) {
        console.log(`Error `)
        res.status(500).json(error(err, res.statusCode));
    }
})


// create alien record
router.post('/', async (req, res) => {
    const alient = new Alien({
        name: req.body.name,
        type: req.body.type
    })
    console.log(req)
    try {
        const isRecordExists = await Alien.findOne({
            name: req.body.name
        })
        if (isRecordExists) {
            res.status(500).json(error("This record already exists", res.statusCode));
        } else {
            const result = await alient.save()
            if (result) {
                res.status(200).json(success(
                    "Record added successfully",
                    res.statusCode));
            }
        }
    } catch (err) {
        res.send(err)
    }
})

// update existing alien record
router.post('/update', async (req, res) => {

    // console.log(req.params.id)
    try {
        const result = await Alien.findById(req.body.id)
       
        result.name = req.body.name
        result.type = req.body.type
        const temp = result.save()
        res.status(200).json(success("Record updated successfully",res.statusCode));
       
    } catch (err) {
        res.status(500).json(error("Record not found", res.statusCode));
    }
})


// delete existing alien record
router.delete('/:id', async (req, res) => {
    const alient = new Alien({
        name: req.body.name,
        type: req.body.type
    })
    console.log(req)
    try {
        const result = await alient.save()
        if (result) {
            res.status(200).json(success(
                "success",
                res.statusCode));
        }
    } catch (err) {
        res.status(500).json(error(err, res.statusCode));
    }
})
const findAlienByName = async (alienName) => {
  await Alien.findById(id, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("Result : ", docs);
    }
});
}


//res.status(422).json(validation({username: 'Username is required.'}))
module.exports = router
