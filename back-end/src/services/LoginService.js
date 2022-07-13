const { users } = require('../database/models');
const { hash } = require('./crypto')

const login = async (userData) => {
  const { email, password } = userData

  const hashpass = hash(password)
  
  const user = await users.findOne({
    where: {
      email: email,
    },
  });
  
  if (!user || hashpass !== user.password) throw new Error('Not Found');

  return user;
};

module.exports = { login };
