const express = require('express');
const path = require('path');
const port = 8000;

const app = express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static('assets'));

//use express router
app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(`Error :${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});