const Pet = require('../models/Pet');
const { validationResult } = require('express-validator');

exports.addPet = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let pet = new Pet(req.body);
        //pet.owner = req.usuario.id;
        console.log(req.user);
        await pet.save();
        
        res.send('Mascota creada');
    } catch (error) {
        res.status(400).send('Hay un error en petcontrooler');
    }
};