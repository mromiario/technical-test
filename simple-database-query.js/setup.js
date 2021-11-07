const db = require('./connection')
const createUsers = 
// Create table user
`
    CREATE TABLE USER(
        id INTEGER PRIMARY KEY,
        UserName TEXT,
        Parent INTEGER,
        FOREIGN KEY (Parent) REFERENCES USER(id) 
    )
`


db.serialize(function(){
    db.run(createUsers,err=>{
        if (err) {
            console.log(err);
        }
    })
})