  let buildMakeLog = function(logValidator) {
    return ({
      endpoint,
      createdAt,
      parameters
    } = {}) => {
      let {error} = logValidator({endpoint, createdAt, parameters})
      if (error) throw new Error(error)
  
      return {
        getEndpoint: () => endpoint,
        getCreatedAt: () => createdAt,
        getParameters: () => parameters
      }
    }
  }
  
  module.exports = buildMakeLog