const cat = require('../models/cat')

function index(req, res) {
    res.render('cat/Index', { cat })
}

function show(req, res){
    res.render('cat/Show', { cat: cat[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }