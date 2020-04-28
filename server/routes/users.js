const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require('../config/default').jwtSecret;
const userModel = require('../model/userModel');
//express-validator
const { check, validationResult } = require('express-validator');

router.post('/', [
    check('email').isEmail(),
    check('password').isLength({min:8})
], async (req, res) => {
    console.log(req.body)
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array() });
    }
    
    await userModel.findOne({
        email: req.body.email
    }).then(user => {
        
        if (user) {
            if (user.email === req.body.email) {
                errors.email = 'Email already exists!'
            }
            return res.status(400).json({errors: 'User already exists' });
        } 
    const newUser = new userModel({
        email: req.body.email,
        password: req.body.password,
        image: req.body.image
    });
    console.log(newUser)
    //bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, 10, async(err, hash) => {
            if(err) return err;
            newUser.password = hash;
            await newUser.save()
                .then(data => {
                    console.log('user saved')
                    jwt.sign(
                        { id: data.id },
                        config,
                        (err,token) => {
                            if(err) return err;
                            console.log(data)
                            return res.json({
                                token,
                                data: {
                                    id: data.id,
                                    name: data.name,
                                    email: data.email 
                                }
                            });
                        }
                    )
                })
            })
        })
            .catch(err => {
                console.log(err)
            return res.status(500).send("Users Server error")    
    }) 
});

router.post('/login', [
    check('email').isEmail(),
    check('password').isLength({min:8})
], async (req, res) => {
    console.log(req.body)
const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(422).json({errors: errors.array() });
}
await userModel.findOne({
    email: req.body.email
}).then(user => {
    console.log(user)
    if (user) {
        user.comparePassword(req.body.password, (isMatch) => {
            if (isMatch == false) {
                return res.status(401).send("Email or Password wrong")
            } else {
                jwt.sign(
                    { id: user.id },
                    config,
                    (err, token) => {
                        if(err) return err;
                        res.send ({
                            token,
                            _id: user._id,
                            email: user.email,
                        })
                    })
                }
            }) 
        } else {
            return res.status(401).send("User does not exist")
        }
    })
});


module.exports = router

