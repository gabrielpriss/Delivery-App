const loginService = require('../services/LoginService');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const login = await loginService.login({ email, password });

    return res.status(200).json(login);
  } catch (error) {
    next(error);
  }
}

module.exports = { login };
