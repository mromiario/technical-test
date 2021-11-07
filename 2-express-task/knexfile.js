module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: 'qlue1234',
      database: 'bibitdb',
      port: 5433
    },
    migrations: {
      directory: __dirname + '/db/pg/migrations'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      port: process.env.PORT,
      ssl: true
    },
    migrations: {
      directory: __dirname + '/db/pg/migrations'
    }
  }
};