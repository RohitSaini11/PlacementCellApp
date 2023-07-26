const express = require('express');

const router = express.Router();

const studentsController = require('../controllers/studentController');

// router.get( '/' , studentsController.renderPage );
router.post('/create', studentsController.createStudent);
router.get('/delete', studentsController.deleteStudent);

module.exports = router;