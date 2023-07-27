const express = require('express');
const passport = require('passport');

const router = express.Router();

const homeController = require('../controllers/homeController');

console.log( "router loaded" );

router.get( '/' , passport.checkAuthentication, homeController.home );

router.get('/downloadReport', homeController.downloadReport);

router.use('/users', require('./users'));

router.use('/student', require('./students'));

router.use('/company', require('./company'));



module.exports = router;