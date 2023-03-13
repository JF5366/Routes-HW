const express = require('express')
const router = express.Router() 

// const meats = require('../models/meats')

const pigController = require('../controllers/pigControllers.js')

router.get('/', pigController.index)
router.get('/:index', pigController.show)

module.exports = router