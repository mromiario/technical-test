const db = require('./connection')
const fs = require('fs')
// create table
require('./setup')
// seed data
require('./seed-data')

// get query to get this data
/*
——————————————————————————————————
| ID | UserName | ParentUserName |
——————————————————————————————————
| 1 | Ali       | Budi |
| 2 | Budi      | NULL |
| 3 | Cecep     | Ali |
——————————————————————————————————
**/
const query = `
    SELECT 
        u.ID, 
        u.UserName, 
        u1.UserName AS 'ParentUserName'
    FROM 
        USER AS u 
    LEFT JOIN USER AS u1 on u.Parent = u1.ID
`
db.serialize(()=>{
    db.all(query, ((err, rows)=>{
        if (!err) {
            console.log('- QUERY:\n')
            console.log(query)
            console.table(rows);
        
            // delete created db, so it could be repeatedly run without error
            fs.unlinkSync('./simple_database_query.db')
        } else {
            console.log(err);
        }
    }))
})
