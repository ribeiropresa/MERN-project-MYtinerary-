const mongoose = require('mongoose')

//I need to use ObjectId to connect the cities and itineraries
const itinerarySchema = new mongoose.Schema({

        city:{
            type: String,
            required: true,
        },   
        title:{
            type: String,
            required: true,
        },   
        likes: {
            type: Number,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        hashtags: {
            type: [String],
            required: true
        },
        profile_photo: {
            type: String
        }
    
})

module.exports = mongoose.model('itinerary', itinerarySchema)