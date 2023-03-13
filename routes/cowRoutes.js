const express = require('express')
const router = express.Router() 

// const meats = require('../models/meats')

const cowController = require('../controllers/cowControllers.js')

router.get('/', cowController.index)
router.get('/:index', cowController.show)

module.exports = router