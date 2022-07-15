const UserService = require('../services/UserService');

const getAllSellers = async (_req, res, next) => {
  try {
    const users = await UserService.getAllSellers();

    return res.status(201).json({ users });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllSellers };
