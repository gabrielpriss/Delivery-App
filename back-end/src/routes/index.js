const { Router } = require('express');
const loginRoutes = require('./login.routes');
const productsRoutes = require('./product.routes');
const registerRoutes = require('./register.routes');
const productsSalesRoutes = require('./sales.products.routes');
const salesRoutes = require('./sales.routes');
const userRoutes = require('./users.routes');

const Routes = Router();

Routes.use('/login', loginRoutes);

Routes.use('/register', registerRoutes);

Routes.use('/products', productsRoutes);

Routes.use('/salesproducts', productsSalesRoutes);

Routes.use('/sales', salesRoutes);

Routes.use('/sellers', userRoutes);

module.exports = { Routes };
