const { Router } = require('express');
const loginRoutes = require('./login.routes');
const productsRoutes = require('./product.routes');
const registerRoutes = require('./register.routes');
const productsSalesRoutes = require('./sales.products.routes');

const Routes = Router();

Routes.use('/login', loginRoutes);

Routes.use('/register', registerRoutes);

Routes.use('/products', productsRoutes);

Routes.use('/productssales', productsSalesRoutes);

module.exports = { Routes };
