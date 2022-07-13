const { Router } = require('express');
const loginRoutes = require('./login.routes');
const productsRoutes = require('./product.routes');
const registerRoutes = require('./register.routes');

const Routes = Router();

Routes.use('/login', loginRoutes);

Routes.use('/register', registerRoutes);

Routes.use('/products', productsRoutes);

module.exports = { Routes };
