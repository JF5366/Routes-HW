const bird = require('../models/bird')

function index(req, res) {
    res.render('bird/Index', { bird })
}

function show(req, res){
    res.render('bird/Show', { bird: bird[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }