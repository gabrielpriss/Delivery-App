const { users } = require('../database/models');

const login = async (userData) => {
  const user = await users.findOne({
    where: {
      email: userData.email,
    },
  });

  return user;
};

module.exports = { login };
