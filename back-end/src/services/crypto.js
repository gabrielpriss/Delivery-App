const md5 = require('md5');

async function hash(data) {
    const hashed = md5(data);
    return hashed;
}

module.exports = {
    hash,
};
