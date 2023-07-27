const express = require('express');

const router = express.Router();

const companyController = require('../controllers/companyController');

//add passport authentication check
router.get('/', companyController.renderPage);

router.post('/create', companyController.createCompany);

router.get('/delete', companyController.deleteCompany);

router.get('/addCompany', companyController.addCompany);

router.post('/updateResult/:id', companyController.updateStatus );

module.exports = router;