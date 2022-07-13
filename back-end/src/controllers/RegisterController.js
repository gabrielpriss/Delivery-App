const RegisterService = require('../services/RegisterService');

const register = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;

    const regist = await RegisterService.register({ email, password, name });

    if (regist === 'error') {
      return res.status(409).json({ message: 'already registred' });
    }

    return res.status(200).json(regist);
  } catch (error) {
    next(error);
  }
};

module.exports = { register };
