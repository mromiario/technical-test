let chai = require('chai');
let expect = chai.expect;
let logDataAccess = require('./index')

describe('log', () => {
  it('insert new log', async () => {
    let log = {
      endpoint: '/search',
      createdat: new Date(),
      parameters: {
        query: {
          apikey: "someapikey",
          s: "somesearch"
        }
      }
    }
    let newLog = await logDataAccess.addLog(log)
    let {id, ...input} = newLog
    expect(input).to.eql(log)
  })

  it('throws error if insert log with invalid payload', () => {
    let invalid = {
      endpoint: '/search',
      createdat: 'not really date',
      parameter: {
        query: {
          apikey: "someapikey",
          s: "somesearch"
        }
      }
    }
    expect(() => {
      studentsDb.addLog(invalid)
    })
    .to.throw(Error)
  })
})