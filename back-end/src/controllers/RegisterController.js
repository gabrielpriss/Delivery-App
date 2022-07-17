const RegisterService = require('../services/RegisterService');
const { tokenSign } = require('../utils/jwt');

const register = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;

    const regist = await RegisterService.register({ email, password, name });

    if (regist === 'error') {
      return res.status(409).json({ message: 'already registred' });
    }

    const token = tokenSign(regist.id);
    const { id } = regist;

    return res.status(201).json({ id, name, email, token });
  } catch (error) {
    next(error);
  }
};

const adminRegister = async (req, res, next) => {
  try {
    const { email, password, name, role } = req.body;

    const regist = await RegisterService.adminRegister({ email, password, name, role });

    if (regist === 'error') {
      return res.status(409).json({ message: 'already registred' });
    }

    const token = tokenSign(regist.id);
    const { id } = regist;

    return res.status(201).json({ id, name, email, role, token });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, adminRegister };
