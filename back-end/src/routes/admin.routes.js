const express = require('express');
const adminController = require('../controllers/RegisterController');
const { auth } = require('../middlewares/auth');
const middlewares = require('../middlewares/validateRegister');

const adminRoutes = express.Router();

adminRoutes.post('/',
    auth,
    middlewares.validateUser,
    middlewares.validateEmail,
    middlewares.validatePassword,
    middlewares.validateRole,
    adminController.adminRegister);

module.exports = adminRoutes;