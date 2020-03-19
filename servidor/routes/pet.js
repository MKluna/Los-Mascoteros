const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
// const auth = require('../middlewares/auth');
const { check } = require('express-validator');

// /api/pet
router.post('/',
    // auth,
    [
        check('name','El nombre es obligatorio').not().isEmpty()
    ],
    petController.addPet
);

module.exports = router;