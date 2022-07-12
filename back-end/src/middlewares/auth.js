const auth = (req, res, next) => {
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const { data } = jwt.verify(token);

    // const user = await users.findOne({
    //   where: { email: data },
    // });

    // if (!user) return res.status(401).json({ message: 'Expired or invalid token' });

    req.user = data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}

module.exports = { auth };