const { users } = require('../database/models');

const getAllSellers = async () => {
    const result = await users.findAll({
        where: {
            role: 'seller',
        },
    });

    return result;
};

module.exports = { getAllSellers };
