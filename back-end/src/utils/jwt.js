const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const jwtConfig = {
  expiresIn: '20d',
};

const tokenSign = (payload) => jwt.sign({ payload }, secret, jwtConfig);

const tokenVerify = (token) => jwt.verify(token, secret);

module.exports = { tokenSign, tokenVerify };
