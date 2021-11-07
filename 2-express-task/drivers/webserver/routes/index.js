const express = require('express')
const router = express.Router()
const checkAuth = require('../middlewares/checkAuth')
const { getByTitleOrId } = require('../../../data-access/movies')

router.get('/search', checkAuth, async (req, res, next) => {
  res.status(200).json(result)
  next()
})

router.get('/detail', checkAuth, async (req, res, next) => {
  try {
    const result = await getByTitleOrId(req.query)
    res.status(200).json(result)
    next()
  } catch (error) {
    console.log(error)
    next (error)
  }
})

module.exports = router