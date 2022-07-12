const { Router } = require('express');
const loginRoutes = require('./login.routes');
const productsRoutes = require('./product.routes');

const Routes = Router();

Routes.use('/login', loginRoutes);

Routes.use('/products', productsRoutes);

module.exports = { Routes };
