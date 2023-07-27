const mongoose = require('mongoose');

//connect to database
mongoose.connect('mongodb://127.0.0.1/PlacementCell');

//acquire the connection(to check if it is successful)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connection to db'));

//the server is up and running
db.once('open',function(){
    console.log('succesfully connected to database');
});

module.exports = db;