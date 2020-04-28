const express = require('express');
const router = express.Router();
const cityModel = require('../model/cityModel');

router.get('/:city', async (req, res) => {
    
    let cityRequested = req.params.city;
    let response = await cityModel.findOne({
        city: cityRequested
    })
        .then(city => {
            return {success: true, city}
        })
        .catch(err => {
            console.log(err);
            return {success: false, msg: 'Error: Database Failed'}
        });
    
    return res.send(response)
});

router.get('/', async (req, res) => {
    
    let response = await cityModel.find({})
        .then(cities => {
            return {success: true, cities}
        })
        .catch(err => {
            console.log(err);
            return {success: false, msg: 'Error: Database Failed'}
        });
    
    return res.send(response)
});

router.post('/', (req, res) => {

    const newCity = new cityModel({
        //to avoid the duplicate values -----> $addToset
        city: req.body.city,
        country: req.body.country,
        image: req.body.image
    })
    newCity.save()
        .then(city => {
        res.send(city)
    })
        .catch(err => {
        return res.status(500).send("Cities // Server error")
    }) 
});

module.exports = router