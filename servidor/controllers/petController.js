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

//Actualizar Mascota
exports.updatePet = async (req,res)=>{
    try 
    {
        //En el caso de no editar la especie borrarla
        const {mascotas,name,birth,specie} = req.body;
      
        //Si existe la mascota
        let petExist = await Pet.findById(req.params.id)

        if (!petExist){return res.status(404).json({msg:'No Existe'})}



        // const existMasc = await Pet.findById(mascotas);
        // if (existMasc.owner.toString() !== req.owner.id) 
        // {
        //     return res.status(401).json({msg:'No Autorizado'})    
        // }
        
         //Created New Object 

         const newPet={}

         if(name){newPet.name = name;}
         if(birth){newPet.birth = birth;}
         if(specie){newPet.specie = specie;}

         //Guardar Mascota

         petExist = await Pet.findByIdAndUpdate({_id:req.params.id},newPet,{new:true})
         res.json({petExist})
    } 
    catch (error) 
    {
        console.log("Error ",error);
        res.status(500).send('Hubo un error GRAVE '+error);
        
    }
}

exports.deletePet=async(req,res)=>
{
    try 
    {
        const mascotas = await Pet.find({owner: req.user.id});
        res.json({mascotas});
      
        //Si existe la mascota
        let petExist = await Pet.findById(req.params.id)

        if (!petExist){return res.status(404).json({msg:'No Existe'})}



        // const existMasc = await Pet.findById(mascotas);
        // if (existMasc.owner.toString() !== req.owner.id) 
        // {
        //     return res.status(401).json({msg:'No Autorizado'})    
        // }
        
         

        //Eliminar Mascota 
        await Pet.findByIdAndRemove({_id:req.params.id})
        res.json({msg:'Pet Deleted'})


    } 
    catch (error) 
    {
        console.log("Error ",error);
        res.status(500).send('Hubo un error GRAVE '+error);
        
    }
}
