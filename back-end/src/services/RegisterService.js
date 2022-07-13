const { users } = require('../database/models');
const crypto = require('./crypto');

const register = async ({ email, password, name }) => {

    const result = await users.findOne({
        where: {
            email,
        },
    });

    if (result) {
        return (
            'error'
        )
    }

    const hashedPassword = await crypto.hash(password);
    
    const createdUser = await users.create({
        email,
        password: hashedPassword,
        name,
    });

    return createdUser;
};

module.exports = { register };
