const mongoose = require('mongoose');

// //connect to database
// mongoose.connect('mongodb://127.0.0.1/PlacementCell');

mongoose.connect("mongodb+srv://rrs0118032:J8bcv7VSepMH2DXI@cluster0.w03xxyy.mongodb.net/placementcell");

//acquire the connection(to check if it is successful)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connection to db'));

//the server is up and running
db.once('open',function(){
    console.log('succesfully connected to database');
});

module.exports = db;