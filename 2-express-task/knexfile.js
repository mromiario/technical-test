module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.HOST_DB,
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB,
      database: process.env.NAME_DB,
      port: process.env.PORT_DB
    },
    migrations: {
      directory: __dirname + '/db/pg/migrations'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.HOST_DB,
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB,
      database: process.env.NAME_DB,
      port: process.env.PORT_DB,
      ssl: true
    },
    migrations: {
      directory: __dirname + '/db/pg/migrations'
    }
  }
};