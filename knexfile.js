const path = require('path');
require('dotenv').config();

const BASE_DB_PATH = path.join(__dirname, 'src', 'database');

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL_DEV,
    pool: {
      min: 0,
      max: 10,
    },
    migrations: {
      directory: path.join(BASE_DB_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_DB_PATH, 'seeds'),
    },
    acquireConnectionTimeout: 5000,
  },

  testing: {
    client: 'pg',
    connection: process.env.DATABASE_URL_TESTING,
    migrations: {
      directory: path.join(BASE_DB_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_DB_PATH, 'seeds'),
    },
    acquireConnectionTimeout: 5000,
  },

  staging: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL_DEV,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(BASE_DB_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_DB_PATH, 'seeds'),
    },
    acquireConnectionTimeout: 5000,
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL_PRODUCTION,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(BASE_DB_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_DB_PATH, 'seeds'),
    },
    acquireConnectionTimeout: 5000,
  },
};
