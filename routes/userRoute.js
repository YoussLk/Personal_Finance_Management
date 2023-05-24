const express = require('express');
const { loginController, registerController } = require('../controllers/userController');

const router = express.Router();


// POST /api/v1/users/login - Login user
router.post('/login', loginController);

// POST /api/v1/users/register - Register user
router.post('/register', registerController);

module.exports = router;
