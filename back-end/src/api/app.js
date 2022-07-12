const express = require('express');
const { Routes } = require('../routes');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(Routes);

module.exports = app;
