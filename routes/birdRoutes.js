const express = require('express')
const router = express.Router() 

// const meats = require('../models/meats')

const birdController = require('../controllers/birdControllers.js')

router.get('/', birdController.index)
router.get('/:index', birdController.show)

module.exports = router