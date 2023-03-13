const express = require("express");
const app = express();
const PORT = 8082

app.get("/", (request, response) => {
    response.send("Hi there");
});

const birdRoutes = require('./routes/birdRoutes')
const catRoutes = require('./routes/catRoutes')
const cowRoutes = require('./routes/cowRoutes')
const dogRoutes = require('./routes/dogRoutes')
const fishRoutes = require('./routes/fishRoutes')
const goatRoutes = require('./routes/goatRoutes')
const horseRoutes = require('./routes/horseRoutes')
const pigRoutes = require('./routes/pigRoutes')
const reptileRoutes = require('./routes/reptileRoutes')
const sheepRoutes = require('./routes/sheepRoutes')


//setting up view
 //npm install jsx-view-engine react react-dom
 //;
 const {createEngine} = require('jsx-view-engine') //load the create engine
 app.set('view engine', 'jsx')
 app.engine('jsx', createEngine()) 

 app.use('/bird', birdRoutes) 
 app.use('/cat', catRoutes) 
 app.use('/cow', cowRoutes) 
 app.use('/dog', dogRoutes) 
 app.use('/fish', fishRoutes) 
 app.use('/goat', goatRoutes) 
 app.use('/horse', horseRoutes) 
 app.use('/pig', pigRoutes) 
 app.use('/reptile', reptileRoutes) 
 app.use('/sheep', sheepRoutes) 






app.listen(PORT, () => {
    console.log("Listen on the port ...");
});