const Mascota = require('../models/Pet');

exports.crearMascota= async (req,res)=>{
    

    try {
        let mascota;

        //Crea la mascota
        mascota = new Mascota(req.body);
        //guardar la mascota
        await mascota.save()
        
        //Mensaje de autenticacion
        res.send('Mascota creada')

    } catch (error) {
        res.status(400).send('Hay un error en petcontrooler');
    }
    


}