const express = require('express');
const loginController = require('../controllers/LoginController')

const loginRoutes = express.Router();

loginRoutes.post('/', loginController.login);

module.exports = loginRoutes;
