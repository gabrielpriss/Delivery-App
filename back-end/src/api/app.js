const express = require('express');
const cors = require('cors');
const error = require('../middlewares/middleware.error');
const { Routes } = require('../routes');

const app = express();
app.use(express.json());

app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(Routes);

app.use(error);

module.exports = app;
