const User = require('../models/users');

module.exports.signIn = function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/');
    }

    return res.render('signIn');
}

module.exports.signUp = function(req,res){

    if(req.isAuthenticated()){
        return res.redirect('/');
    }

    return res.render('signUp');
}

module.exports.create = function(req,res){
    try{
        const {email, password ,name} = req.body; 
        if(req.body.password !== req.body.confirm_password){
            console.log('Passoword and confirm password dont match');
            return res.redirect('back');
        }
        //create a if condition checking whether the email already exists or not

        User.create({email, password, name})
            .then((user)=>{
                return res.redirect('/users/signIn');
            });
    }
    catch(err){
        console.log(`Error in signUp cant create new user ${err}`);
    }
}

//sign in and creaate session
module.exports.createSession = function(req,res){
    return res.redirect('/');
}

//destroy the session and logout the user
module.exports.destroySessoin = function(req,res){
    req.logout(function(err) {
        if (err) { return next(err); }
        return res.redirect('/');
    });
}