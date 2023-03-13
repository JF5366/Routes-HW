const express = require('express')
const router = express.Router() 

// const meats = require('../models/meats')

const horseController = require('../controllers/horseControllers.js')

router.get('/', horseController.index)
router.get('/:index', horseController.show)

module.exports = router