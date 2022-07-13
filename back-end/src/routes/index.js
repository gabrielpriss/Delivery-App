const { Router } = require('express');
const loginRoutes = require('./login.routes');
const productsRoutes = require('./product.routes');
<<<<<<< HEAD
const registerRoutes = require('./register.routes');
=======
const productsSalesRoutes = require('./sales.products.routes');
>>>>>>> 893e45be12f8fd64cc68ba330e6deb30d5707b7d

const Routes = Router();

Routes.use('/login', loginRoutes);

Routes.use('/register', registerRoutes);

Routes.use('/products', productsRoutes);

Routes.use('/productssales', productsSalesRoutes);

module.exports = { Routes };
