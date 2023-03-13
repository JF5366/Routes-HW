const dog = require('../models/dog')

function index(req, res) {
    res.render('dog/Index', { dog })
}

function show(req, res){
    res.render('dog/Show', { dog: dog[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }