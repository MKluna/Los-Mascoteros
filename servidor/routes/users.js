const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {check} = require('express-validator');
const auth = require('../middlewares/auth');

//api/users
//Crear User
router.post('/',
[
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('email','Agrega un email valido').isEmail(),
    check('password','El password debe ser de 6 caracteres').isLength({min:6})
],
    userController.createUsers
)
router.put('/:id',auth,userController.subirArchivo,userController.editUsers)

module.exports = router;