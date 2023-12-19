import { Knex } from 'knex';

const config: Record<string, Knex.Config> = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOST,
      user: 'root',
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};

export default config;