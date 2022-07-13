const express = require('express');
const loginController = require('../controllers/LoginController');
const middlewares = require('../middlewares/validateLogin');

const loginRoutes = express.Router();

loginRoutes.post('/',
  middlewares.validateEmail,
  middlewares.validatePassword,
  loginController.login
);

module.exports = loginRoutes;
