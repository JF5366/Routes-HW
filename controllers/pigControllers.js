const pig = require('../models/pig')

function index(req, res) {
    res.render('pig/Index', { pig })
}

function show(req, res){
    res.render('pig/Show', { pig: pig[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }