const express = require('express')
const router = express.Router()

// get middleware
const checkAuth = require('../middlewares/checkAuth')
const saveLogAPI = require('../middlewares/saveLogAPI')

// access data
const { getByTitleOrId, getBySearch } = require('../../../data-access/movies')

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: "Hello, I'm M Romi Ario. Please Read the README",
    Readme: 'https://github.com/mromiario/technical-test/blob/main/README.md'
  })
})

router.get('/search', checkAuth, async (req, res, next) => {
  try {
    const result = await getBySearch(req.query)
    res.status(200).json(result)
    next()
  } catch (error) {
    next (error)
  }
}, saveLogAPI)

router.get('/detail', checkAuth, async (req, res, next) => {
  try {
    const result = await getByTitleOrId(req.query)
    res.status(200).json(result)
    next()
  } catch (error) {
    next (error)
  }
}, saveLogAPI)

module.exports = router