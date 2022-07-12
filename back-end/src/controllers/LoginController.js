const loginService = require('../services/LoginService');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await loginService.login({ email, password });

    if(!result) {
      return res.status(400).json({ message: 'User not found'});
    }

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = { login };
