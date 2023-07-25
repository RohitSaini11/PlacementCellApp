const express = require('express');

const router = express.Router();

const homeController = require('../controllers/homeController');

console.log( "router loaded" );

router.get( '/' , homeController.home );
//router.use('/users', require('./users'));
//router.use('/students', require('./students'));
//router.use('/company', require('./company'));

module.exports = router;