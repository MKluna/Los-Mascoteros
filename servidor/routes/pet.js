const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
const auth = require('../middlewares/auth');
const { check } = require('express-validator');

// /api/pet
router.post('/',
    auth,
    [
        check('name','El nombre es obligatorio').not().isEmpty()
    ],
    petController.addPet
);

//api/pet
router.get('/',
        auth,
        petController.getPet
)

//Actualizar Mascota
router.put('/:id',
auth,
petController.updatePet
)

//Eliminar una mascota
router.delete('/:id',auth,petController.deletePet)


module.exports = router;