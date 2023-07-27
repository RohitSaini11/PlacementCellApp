//import Student schema here
const Student = require('../models/students');


// module.exports.renderPage = async function(req,res){
//     try{    
//          const students = await Student.find()
    
//          return res.render('studentInfo',{ user_name: "User Name", students });
//     }    
//     catch(err){
//         console.log("Error in fetching student details!", err);
//         return;
//     };
// }

module.exports.createStudent = function(req,res){
    const {name,email,batch,phone,placed,college,dsa,webd,react} = req.body;
    console.log(req.body);
    Student.create({
        name,
        email,
        batch,
        phone,
        placed,
        college,
        dsa,
        webd,
        react
    }).then((newStudent) => {
        console.log('******', newStudent);
        return res.redirect('/');
    }).catch((err) => {
        console.log("Error in adding student details!",err);
        return;
    });
}

module.exports.deleteStudent = function(req,res){
    const id = req.query.id;
    Student.findByIdAndDelete(id)
    .then(()=>{
        return res.redirect('/');
    })
    .catch((err)=>{
        console.log('error in deleting student record',err);
    });
}

module.exports.addStudent = function(req,res){
        return res.render('addStudent'); 
}