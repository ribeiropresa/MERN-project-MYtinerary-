const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },   
    password: {
        type: String,
        required: true
    }
})

userSchema.methods = {
    comparePassword: function comparePassword(candidatePassword, cb) { 
        bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
         
            if (err) return cd(err)
           
            cb(isMatch);
        })
    }
}

module.exports = mongoose.model('user', userSchema)