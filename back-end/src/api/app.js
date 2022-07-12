const express = require('express');
const { Routes } = require('../routes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3002'
}));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(Routes);

module.exports = app;
