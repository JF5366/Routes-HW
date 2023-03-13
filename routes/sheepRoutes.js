const express = require('express')
const router = express.Router() 

// const meats = require('../models/meats')

const sheepController = require('../controllers/sheepControllers.js')

router.get('/', sheepController.index)
router.get('/:index', sheepController.show)

module.exports = router