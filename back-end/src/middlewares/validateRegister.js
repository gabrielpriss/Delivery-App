const validateEmail = (req, res, next) => {
    const { email } = req.body;
    
    const trueEmail = email.match(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    );

    if (!trueEmail) {
        return res.status(404).json({ message: 'Not found' });
    }

    if (email === '') {
        return res.status(400).json({ message: '"email" is not allowed to be empty' });
    }

    if (!email) {
        return res.status(400).json({ message: '"email" is required' });
    }
    
    next();
};

const validatePassword = (req, res, next) => {
    const { password } = req.body;

    if (password === '') {
        return res.status(400).json({ message: '"password" is not allowed to be empty' });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: '"password" must be 6 character length' });
    }

    if (!password) {
        return res.status(400).json({ message: '"password" is required' });
    }

    next();
};

const validateUser = (req, res, next) => {
    const { name } = req.body;

    if (name === '') {
        return res.status(400).json({ message: '"name" is not allowed to be empty' });
    }

    if (name.length < 12) {
        return res.status(400).json({ message: '"name" must be 12 character length' });
    }

    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }

    next();
};

module.exports = { validateEmail, validatePassword, validateUser };