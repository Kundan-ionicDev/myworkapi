const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const config = require('config');

router.post('/', async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    // Check if this user already exisits
    // let user = await User.find({ email: req.body.email , mobilenumber: req.body.mobilenumber });
    let user = await User.findOne({ $or: [{email: req.body.email }, {mobilenumber: req.body.mobilenumber }] });
    if (user) {
        // return res.status(400).send('That user already exisits!');
        return res.json({status: 400, Message: 'That user already exisits!'});
    } else {
        // Insert the new user if they do not exist yet
        user = new User(_.pick(req.body, ['name', 'email', 'password','mobilenumber']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        const token = jwt.sign({ _id: user._id }, config.get('PrivateKey'));
        res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email','mobilenumber']));
        res.send(_.pick(user, ['_id', 'name', 'email','mobilenumber']));
    }
});
 
module.exports = router;