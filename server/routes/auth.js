const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('../config/default').jwtSecret;
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')
const User = require('../model/userModel');

//authorization
router.post('/', (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({msg: 'Please enter all fields'})
    }
    User.findOne({email})
    .then(user => {
        if(!user) return res.status(400).json({msg: 'User does not exist'});
        bcrypt.compare(password, user.password)
            .then(isMatch =>{
                if(!isMatch) return res.status(400).json({msg: 'Invalid credentials'});

                jwt.sign(
                    {id: user.id},
                    config,
                    (err, token) => {
                        if(err) throw err;
                        res.json({
                            token,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }
                        })
                    }
                )
            })
    })
});

router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user))
});

module.exports = router;