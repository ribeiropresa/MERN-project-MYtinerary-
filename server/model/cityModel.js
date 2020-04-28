const mongoose = require('mongoose')
const citySchema = new mongoose.Schema({
        city:{
            type: String,
            required: true,
        },   
        country: {
            type: String,
            required: true
        },
        image: {
            type: String
        }
    
})

//to avoid the duplicate values -----> $addToset
//the code to avoid duplicated values doesn't exist, I've tried some and at some point one of them worked, but deleted it.

module.exports = mongoose.model('city', citySchema)