const md5 = require('md5');
const { users } = require('../database/models');

const login = async (userData) => {
  const { email, password } = userData;

  const hashpass = md5(password);
  
  const user = await users.findOne({
    where: {
      email,
    },
  });
  
  if (!user || hashpass !== user.password) {
    return { message: 'User not found' };
  }

  return { user };
};

module.exports = { login };
