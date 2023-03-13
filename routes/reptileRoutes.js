const express = require('express')
const router = express.Router() 

// const meats = require('../models/meats')

const reptileController = require('../controllers/reptileControllers.js')

router.get('/', reptileController.index)
router.get('/:index', reptileController.show)

module.exports = router