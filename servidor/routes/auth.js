const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');

// router.post('/', 
//     authController.authenticateUser
// );

router.post('/', 
    authController.authenticateUser
);

router.get('/', 
    auth,
    authController.userAuthenticate
);

module.exports = router;