const express = require('express')
const router = express.Router()
const checkAuth = require('../middlewares/checkAuth')

router.get('/search', checkAuth, (req, res, next) => {
  res.status(200).json({

  })
  next()
})

router.get('/detail', checkAuth, (req, res, next) => {
    res.status(200).json({

    })
    next()
  })

module.exports = router