module.exports = {
  development: {
    client: "mysql2",
    connection: {
      port: "3306",
      host: "localhost",
      database: "provider",
      user: "root",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/db/migrations",
    },
    seeds: {
      directory: __dirname + "/db/seeds",
    },
  },
};
