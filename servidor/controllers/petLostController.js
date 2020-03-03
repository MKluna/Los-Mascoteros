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