const express = require('express');
const RegisterController = require('../controllers/RegisterController');
const middlewares = require('../middlewares/validateLogin')

const registerRoutes = express.Router();

registerRoutes.post('/', middlewares.validatePassword, middlewares.validateEmail, RegisterController.register);

module.exports = registerRoutes;
