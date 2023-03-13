const goat = require('../models/goat')

function index(req, res) {
    res.render('goat/Index', { goat })
}

function show(req, res){
    res.render('goat/Show', { goat: goat[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }