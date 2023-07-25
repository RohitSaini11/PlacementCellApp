module.exports.home = function(req,res){
    return res.render('home',{user_name:'User Name'});
};