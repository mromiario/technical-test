var environment = process.NODE_ENV || 'development';
var knexConfig = require('../../knexfile')[environment];
console.log(knexConfig[environment])
module.exports = require('knex')(knexConfig);