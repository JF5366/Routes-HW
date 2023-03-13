const fish = require('../models/fish')

function index(req, res) {
    res.render('fish/Index', { fish })
}

function show(req, res){
    res.render('fish/Show', { fish: fish[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }