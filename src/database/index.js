const { Client } = require('pg');
const config = require('./config.json');

const client = new Client({
  host: config.HOST,
  port: config.PORT,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DATABASE,
});

client.connect();

exports.query = async (query) => {
  const { rows } = await client.query(query);
  return rows;
};
