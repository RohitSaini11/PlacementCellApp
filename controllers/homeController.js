const Student = require('../models/students');

module.exports.home = async function(req,res){
    try{    
        const students = await Student.find()
   
        return res.render('home',{ user_name: "User Name", students });
   }    
   catch(err){

       console.log("Error in fetching student details!", err);
       return;
       
   };
};