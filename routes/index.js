const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');

console.log( "router loaded" );

router.get( '/' , homeController.home );

router.use('/users', require('./users'));

router.use('/student', require('./students'));

router.use('/company', require('./company'));

// router.get('/signup', function(req,res){
//     return res.render('signUp');
// });

// router.get('/signin', function(req,res){
//     return res.render('signIn');
// });


module.exports = router;