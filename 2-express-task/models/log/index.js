  const schema = require('./log-schema')
  let buildMakeLog = function(payload) {
    const {
      endpoint,
      createdat,
      parameters
    } = payload

      let {error} = schema.validate({endpoint, createdat, parameters})
      console.log(error)
      if (error) throw new Error(error)
  
      return {
        getEndpoint: () => endpoint,
        getCreatedat: () => createdat,
        getParameters: () => parameters
      }
  }
  
  module.exports = buildMakeLog