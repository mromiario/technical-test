const axios = require('axios')

module.exports = {
  getByTitleOrId: async (query) => {
    if (!query.i && !query.t) {
      const err = new Error()
      err.statusCode = 400
      err.message = `Please choose between query "i" (find by imdb id) or "t" (find by title)`
      throw err
    }
    const result = await axios({
      method: 'get',
      url: 'http://www.omdbapi.com',
      params: {
        apikey: process.env.OMDB_API_KEY,
        r: 'json',
        i: query.i || null,
        t: query.t || null
      }
    })
    return result.data
  }
}