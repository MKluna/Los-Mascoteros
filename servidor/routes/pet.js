const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

//api/pets
router.post('/',
petController.crearMascota
);

module.exports = router;