const { sales } = require('../../database/models');

const getAll = async () => sales.findAll();

module.exports = { getAll };
