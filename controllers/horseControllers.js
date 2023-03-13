const horse = require('../models/horse')

function index(req, res) {
    res.render('horse/Index', { horse })
}

function show(req, res){
    res.render('horse/Show', { horse: horse[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }