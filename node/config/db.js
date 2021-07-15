const config = require('../../knexfile')
const isDev = require('electron-is-dev');
let env = isDev ? 'development' : 'production';

const knex = require('knex')(config[env])


knex.migrate.latest([config])
module.exports = knex