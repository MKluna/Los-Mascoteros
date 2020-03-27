const Pet = require('../models/Pet');
const { validationResult } = require('express-validator');

exports.addPet = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let pet = new Pet(req.body);
        pet.owner = req.user.id;
        
        await pet.save();
        
        res.send('Mascota creada');
    } catch (error) {
        res.status(400).send('Hay un error en petcontrooler');
    }
};

//obtener las mascotas
exports.getPet = async (req,res)=> {
    try{
        const mascotas = await Pet.find({owner: req.user.id});
        res.json({mascotas});
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}
