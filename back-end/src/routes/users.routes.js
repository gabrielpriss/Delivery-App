const express = require('express');
const userController = require('../controllers/UserController');

const userRoutes = express.Router();

userRoutes.get('/',
    userController.getAllSellers);

module.exports = userRoutes;
