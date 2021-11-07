const db = require('./connection')
// seed data to table user
let insertUser = 
`
INSERT INTO USER(id, UserName, Parent) VALUES (?,?,?)
`

// data from task
const users = [
    [1, 'Ali', 2],
    [2, 'Budi', 0],
    [3, 'Cecep', 1]
]

for (let i = 0; i < users.length; i++) {
    db.serialize( function() {
        db.run( insertUser, [...users[i]],err => {
            if (err) {
                console.log(err);
            }
        })
    })
}