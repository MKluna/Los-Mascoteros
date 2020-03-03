const express = require('express');
const router = express.Router();
const petLostController = require('../controllers/petLostController');
const { check } = require('express-validator');

//api/petlost
router.post('/',
    [
        check('ubication','La Ubicacion de Perdida es obligatoria').not().isEmpty(),
        check('date','La Fecha de perdida es obligatoria').not().isEmpty()
    ],
    petLostController.createPetLost
);

module.exports = router;