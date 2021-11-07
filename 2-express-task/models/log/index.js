let buildLog = require('./log')
let logSchema = require('./log-schema')
let logValidator = require('../validator')(logSchema)


let makeLog = buildLog(logValidator)

module.exports = makeLog