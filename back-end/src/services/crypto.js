const crypto = require('crypto');

async function hash(data) {
    const hashed = crypto.createHash('md5').update(data).digest('hex');
    return hashed;
}

module.exports = {
    hash,
};
