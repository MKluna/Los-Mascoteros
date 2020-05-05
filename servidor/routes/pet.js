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
);
router.get('/lost/:id',
    petController.getPetLost
)

//Actualizar Mascota
router.put('/:id',
    auth,
    [
        check('name','El nombre es obligatorio').not().isEmpty()
    ],
    petController.updatePet
);

//Eliminar una mascota
router.delete('/:id',
    auth,
    petController.deletePet
);


module.exports = router;