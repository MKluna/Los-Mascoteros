const PetLost = require('../models/PetLost');

exports.createPetLost= async (req,res)=>{
    
    try {
        let petLost;

        //Crea la mascota perdida
        petLost = new PetLost(req.body);
        
        //guardar la mascota perdida
        await petLost.save()
        
        //Mensaje de autenticacion
        res.send('Pet Lost Created :)')

    } catch (error) {
        res.status(400).send('Hay un error en Pet Lost Controller');
    }
    
}

exports.getPetLost = async (req,res) => {

    try {
        const petLost = await PetLost.find({});
        res.json({petLost});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}