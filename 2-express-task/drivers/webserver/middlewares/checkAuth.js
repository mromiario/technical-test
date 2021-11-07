module.exports = (req, res, next) => {
  if (req.query && req.query.apiKey === 'kQA92nad9q0d') {
    next()
  } else {
    const err = new Error()
    err.statusCode = 401
    err.message = 'Unauthorized'
    next(err)
  }
}