const Pet = require('../models/Pet');
const { validationResult } = require('express-validator');
const multer = require("multer");
const shortid = require("shortid");

const configuracionMulter = {
    storage: (fileStorage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, __dirname + "../../uploads/imagePet");
      },
      filename: (req, file, cb) => {
        const extension = file.mimetype.split("/")[1];
        cb(null, `${shortid.generate()}.${extension}`);
      },
    })),
    fileFilter(req, file, cb) {
      if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
      } else {
        cb(new Error("Formato No válido"));
      }
    },
  };
  // pasar la configuración y el campo
  const upload = multer(configuracionMulter).single("image");
  //Sube un archivo
  exports.subirArchivo = (req,res,next)=>{
      upload(req,res,function (error) { 
          if (error) {
              res.json({mensaje:error})
          }
          return next();
       })
  }




exports.addPet = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //crea una mascota
    let pet = new Pet(req.body);
    try {
        if (req.file===undefined||null) 
        {
            pet.image='empty'
        }
        else
        {
            if (req.file.filename){pet.image=req.file.filename}
        }
        //guardamos el dueno
        pet.owner = req.user.id;
        
        //guardo mascota await?
        pet.save();
        res.json(pet);

        // await pet.save();

        // res.send('Mascota creada');
        res.statud(200).send('Mascota creada');
    } catch (error) {
        res.status(400).send('Hay un error en petcontrooler');
    }
};

//obtener las mascotas
exports.getPet = async (req,res) => {
    try {
        const mascotas = await Pet.find({owner: req.user.id});
        res.json({mascotas});
        
    } catch(error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
};

//obtener mascota que se reporto como perdidad
exports.getPetLost = async (req,res) => {
    try {
        //console.log(req.params.id);
        const petLost = await Pet.find({_id:req.params.id});
        console.log(petLost)
        res.json({petLost});
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

//Actualizar Mascota
exports.updatePet = async (req,res) => {
    //revisar si hay error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    try 
    {
        let petExist = await Pet.findById(req.params.id);
        if (!petExist) { return res.status(404).json({msg:'No Existe'}); }

        if (petExist.owner.toString() !== req.user.id) 
        {
            return res.status(401).json({msg: 'No autorizado'});
        }

        
        let petImage = await Pet.findById(req.params.id);
        let newImagePet = req.body;
        if (req.file.filename) 
        {newImagePet.image = req.file.filename}
        else
        {newImagePet.image=petImage.image}

        let newPet = req.body;
        let pet = await Pet.findByIdAndUpdate({_id:req.params.id},newPet,{new:true})
         res.json({pet});
    } 
    catch (error) 
    {
        console.log("Error ",error);
        res.status(500).send('Hubo un error GRAVE '+error);
        
    }
};

exports.deletePet = async(req,res) =>
{
    try 
    {

        let petExist = await Pet.findById(req.params.id)
        if (!petExist){return res.status(404).json({msg:'No Existe'})}

        if(petExist.owner.toString() !== req.user.id){
            return res.status(401).json({msg: 'No autorizado'});
        }

        //eliminar el proyecto
    await Pet.findOneAndRemove({_id:req.params.id});
        res.json({msg:'Pet Deleted'});


    } 
    catch (error) 
    {
        console.log("Error ",error);
        res.status(500).send('Hubo un error GRAVE '+error);
        
    }
};
