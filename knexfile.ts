import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgres",
    connection: {
      database: "binarnew6",
      user: "postgres",
      password: "admin",
      host: "127.0.0.1",
      port: 5432,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
  },
};

export default config;
