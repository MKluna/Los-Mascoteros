const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

exports.createUsers = async (req,res) => {

    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    console.log(req.body);
    

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