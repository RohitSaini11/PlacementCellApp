const express = require('express');
const passport = require('passport');

const router = express.Router();

const userController = require('../controllers/userController');


router.get( '/signIn' , userController.signIn);
router.get('/signUp' , userController.signUp);

router.post('/create',userController.create);

router.post('/create-session', passport.authenticate('local',{failureRedirect: '/users/signIn'}) , userController.createSession);
router.get('/signOut',userController.destroySessoin);

module.exports = router;