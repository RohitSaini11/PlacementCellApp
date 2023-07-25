const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

console.log( "router loaded" );

// router.get( '/' , userController);

module.exports = router;