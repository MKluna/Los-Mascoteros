const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.authenticateUser = async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg:'El usuario no esta registrado' });
        }
        
        const correctPass = await bcryptjs.compare(password, user.password);
        if (!correctPass) {
            return res.status(400).json({ msg: 'Password Incorrecto' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };
        
        jwt.sign(payload, process.env.SECRETO, {
            expiresIn: 3600
        }, (error, token) => {
            if (error) throw error;

            res.json({ token });
        });

         
    } catch (error) {
        console.log(error);
    }
};

exports.userAuthenticate = async (req, res) => {
    try {
        console.log('Desde el servidor usersu')
        console.log(req.user)
        const user = await User.findById(req.user.id).select('-password');
        console.log('Desde el servidor');
        console.log(user)
        res.json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hubo un error'});
    }
};