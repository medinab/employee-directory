const env = process.env.NODE_ENV || 'development';
const config = require('../db/knexfile')[env];

module.exports = require('knex')(config);