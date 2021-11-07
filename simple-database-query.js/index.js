const db = require('./connection')
const fs = require('fs')
// create table
require('./setup')
// seed data
require('./seed-data')

// get query
const query = `
    SELECT * FROM USER
`
db.serialize(()=>{
    db.all(query, ((err, rows)=>{
        if (!err) {
            console.table(rows);
        
            // delete created db, so it could be repeatedly run without error
            fs.unlinkSync('./simple_database_query.db')
        } else {
            console.log(err);
        }
    }))
})
