const express = require('express')
const router = express.Router() 

// const meats = require('../models/meats')

const goatController = require('../controllers/goatControllers.js')

router.get('/', goatController.index)
router.get('/:index', goatController.show)

module.exports = router