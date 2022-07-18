const loginService = require('../services/LoginService');
const { tokenSign } = require('../utils/jwt');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { user, message } = await loginService.login({ email, password });

    if (message) {
      return res.status(404).json({ message });
    }

    const token = tokenSign(user.id);

    const { id, name, role } = user;

    return res.status(200).json({ id, name, email, role, token });
  } catch (error) {
    next(error);
  }
};

module.exports = { login };
