const sheep = require('../models/sheep')

function index(req, res) {
    res.render('sheep/Index', { sheep })
}

function show(req, res){
    res.render('sheep/Show', { sheep: sheep[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }