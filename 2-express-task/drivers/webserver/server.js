require('dotenv').config()
const express = require('express')
const cors = require('cors')
const indexRouter = require('./routes/')
const app = express()


app.use(cors())
app.use('/', indexRouter)

app.use((err, req, res, next) => {
  if (err) {
    console.error(err.message)
    if (!err.statusCode) {
      err.statusCode = 500
    } // Set 500 server code error if statuscode not set
    return res.status(err.statusCode).send({
      statusCode: err.statusCode,
      message: err.message
    })
  }
})

const PORT = process.env.PORT_EXPRESS || 3000

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
})
