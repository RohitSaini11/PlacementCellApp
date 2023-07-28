const express = require('express');
const path = require('path');
// const port = 8000;
const PORT = process.env.PORT || 8000;
const dotenv = require('dotenv');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo')(session);

// require('dotenv').config();
dotenv.config({ path: 'config/.env' });

const app = express();

const db = require('./config/mongoose');



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


// used for session cookie
app.use(session({ 
    name:'placement cell app',
    secret:'hehe',
    saveUninitialized: false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    },
    store: new MongoStore(
        {
            mongooseConnection: db,
            autoRemove: 'disabled'
        },
        function(err){
            console.log(err || 'connect-mongodb setup Ok')
        })
}));

app.use(express.static('assets'));    
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use(express.urlencoded());

//use express router
app.use('/',require('./routes'));

app.listen(PORT, function(err){
    if(err){
        console.log(`Error :${err}`);
    }
    console.log(`Server is running on port: ${PORT}`);
});