const sqlite3 = require('sqlite3').verbose()

// initialize database connection
const db = new sqlite3.Database('simple_database_query.db');

module.exports= db 