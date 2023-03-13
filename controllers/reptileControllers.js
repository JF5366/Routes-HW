const reptile = require('../models/reptile')

function index(req, res) {
    res.render('reptile/Index', { reptile })
}

function show(req, res){
    res.render('reptile/Show', { reptile: reptile[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }