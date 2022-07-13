const express = require('express');
const RegisterController = require('../controllers/RegisterController');
const middlewares = require('../middlewares/validateRegister');

const registerRoutes = express.Router();

registerRoutes.post('/',
    middlewares.validatePassword,
    middlewares.validateEmail,
    middlewares.validateUser,
    RegisterController.register);

module.exports = registerRoutes;
