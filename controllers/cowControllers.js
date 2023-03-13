const cow = require('../models/cow')

function index(req, res) {
    res.render('cow/Index', { cow })
}

function show(req, res){
    res.render('cow/Show', { cow: cow[req.params.index] })
 }

 module.exports = {
    index, 
    show
 }