const express = require('express');
const router = express.Router();
const itineraryModel = require('../model/itineraryModel');

router.get('/:city', async (req, res) => {
    let itineraryRequested = req.params.city;
    let response = await itineraryModel.find({
        city: itineraryRequested
    }).then(itineraries => {
            return {success: true, itineraries}
        })
        .catch(err => {
            console.log(err);
            return {success: false, msg: 'Error: Database Failed'}
        });

    return res.send(response)
});

router.post('/', (req, res) => {

    const newItinerary = new itineraryModel({
        city:req.body.city,
        title:req.body.title,   
        likes:req.body.likes,
        duration:req.body.duration,
        price:req.body.price,
        hashtags:req.body.hashtags,
        profile_photo:req.body.profile_photo
    })
    newItinerary.save()
        .then(itinerary => {
            res.send(itinerary)
        })
        .catch(err => {
            return res.status(500).send("Itinerary // Server error")
    }) 
});

module.exports = router
