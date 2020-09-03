const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
const auth = require('../middlewares/auth');
const { check } = require('express-validator');

// /api/pet
router.post('/',
    auth,
    petController.subirArchivo,
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
    petController.subirArchivo,
    petController.updatePet
);

//Eliminar una mascota
router.delete('/:id',
    auth,
    petController.deletePet
);


module.exports = router;