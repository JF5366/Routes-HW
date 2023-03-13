const express = require('express')
const router = express.Router() 

// const meats = require('../models/meats')

const fishController = require('../controllers/fishControllers.js')

router.get('/', fishController.index)
router.get('/:index', fishController.show)

module.exports = router