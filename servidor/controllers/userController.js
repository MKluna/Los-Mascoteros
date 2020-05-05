const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const multer = require("multer");
const shortid = require("shortid");

const configuracionMulter = {
    storage: (fileStorage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, __dirname + "../../uploads/imageUser");
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

exports.createUsers = async (req,res) => {

    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }
    const {email,password} = req.body;

    try {
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({msg: 'El Usuario ya existe'})
        }

        user = new User(req.body);
        
        //Hashear password
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(password,salt);

        await user.save();
        //res.send('Usuario Creado Correctamente');

        //Crear y firmar JWT
        //Crear JWT
        const payload = {
            user: {
                id : user.id
            }
        }

        //firmar el JWT
        jwt.sign(payload,process.env.SECRETO,{
            expiresIn : 18000
        },(error,token)=>{
            if(error) throw error;
            //Mensaje de confirmacion
            res.json({token : token});
        });

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error al crear el usuario');
    }
}

exports.editUsers=async(req,res)=>{
  try {
   let user = await User.findById({_id:req.params.id})
   user.image = 'empty'
   user.image = req.file.filename 
   user.save()
   res.json(user)
  } catch (error) {
    console.log(error);
    res.json({msg:'Internal error'})
  }
}