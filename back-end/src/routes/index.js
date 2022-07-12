const loginRoutes = require('./login.routes');
const { Router } = require('express');

const Routes = Router();

Routes.use('/login', loginRoutes);

module.exports = { Routes };
