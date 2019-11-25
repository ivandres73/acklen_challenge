const Sequelize = require('sequelize');
require('dotenv').config();

//dotenv variables
const PG_HOST = REACT_APP_PG_HOST;
const PG_DB_NAME =_REACT_APP_PG_DB_NAME;
const PG_PORT = REACT_APP_PG_PORT;
const PG_USER = _REACT_APP_PG_USER;
const PG_PASS = _REACT_APP_PG_PASS;


//string syntax = 'postgres://[db-user]:[password]@127.0.0.1:5432/node-postgres-sequelize';
DATABASE_URL = 'postgres://' + PG_USER + ':' + PG_PASS + '@' + PG_HOST + ':' + PG_PORT + '/' + PG_DB_NAME;

const database = new Sequelize(DATABASE_URL);

module.exports = database;