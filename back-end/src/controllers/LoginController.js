const loginService = require('../services/LoginService');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { user, message } = await loginService.login({ email, password });

    if (message) {
      return res.status(404).json({ message });
    }

    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
