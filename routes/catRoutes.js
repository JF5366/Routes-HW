const express = require('express')
const router = express.Router() 

// const meats = require('../models/meats')

const catController = require('../controllers/catControllers.js')

router.get('/', catController.index)
router.get('/:index', catController.show)

module.exports = router