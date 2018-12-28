const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: '47.100.13.61',
  port: '3306',
  user: 'root',
  password: 'shitou',
  dateStrings: true
};
