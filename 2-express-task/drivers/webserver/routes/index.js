const express = require('express')
const router = express.Router()

router.get('/search', (req, res, next) => {
  res.status(200).json({

  })
  next()
})

router.get('/detail', (req, res, next) => {
    res.status(200).json({

    })
    next()
  })

module.exports = router