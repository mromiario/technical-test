require('dotenv').config()
let chai = require('chai');
let expect = chai.expect;
let movieDataAccess = require('./index')

const expectThrowsAsync = async (method) => {
    let error = null
    try {
      await method()
    } catch (err) {
      error = err
    }
    expect(error).to.be.an('Error')
  }

describe('movie', () => {
  it('get movie by title or id with invalid query', async () => {
    expectThrowsAsync((() => movieDataAccess.getByTitleOrId({})))
  })

  it('get movie by title or id with valid query', async () => {
    const query = {
        t: 'Batman'
    }
    const result = await movieDataAccess.getByTitleOrId(query)
    expect(result).to.be.an('object')
    expect(result).to.have.property('Title')
  })

  it('search movie with invalid query', async () => {
    expectThrowsAsync((() => movieDataAccess.getBySearch({})))
  })

  it('search movie with valid query', async () => {
    const query = {
        s: 'Batman'
    }
    const result = await movieDataAccess.getBySearch(query)
    expect(result).to.be.an('object')
    expect(result).to.have.property('Search')
  })
})