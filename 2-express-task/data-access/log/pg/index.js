let knex = require('../../../db/pg/knex')
let makeLog = require('../../../models/log/index') // model

let addLog = (payload) => {
  let log = makeLog(payload)
  let newLog = {
    endpoint: log.getEndpoint(),
    createdat: log.getCreatedat(),
    parameters: log.getParameters()
  }
  return knex('logs')
    .insert(newLog)
    .returning('*')
    .then(result => result[0])
}

module.exports = {
  addLog
}