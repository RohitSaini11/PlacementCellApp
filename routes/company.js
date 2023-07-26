const express = require('express');

const router = express.Router();

const companyController = require('../controllers/companyController');

router.get('/', companyController.renderPage);
router.post('/create', companyController.createCompany);
router.get('/delete', companyController.deleteCompany);

module.exports = router;