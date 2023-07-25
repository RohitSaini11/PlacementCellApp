const express = require('express');

const router = express.Router();

const studentsController = require('../controllers/studentController');

router.get( '/' , studentsController.renderPage );

module.exports = router;