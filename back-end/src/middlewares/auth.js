const { tokenVerify } = require('../utils/jwt');

const auth = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const data = tokenVerify(token);
    console.log(token);

    // const user = await users.findOne({
    //   where: { email: data },
    // });

    // if (!user) return res.status(401).json({ message: 'Expired or invalid token' });

    req.user = data;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { auth };