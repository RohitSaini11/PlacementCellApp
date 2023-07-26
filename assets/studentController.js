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
    Student.create({
        name: req.body.name,
        batch: req.body.batch,
        email: req.body.email,
        phone: req.body.phone,
        placed: req.body.placed
    }).then((newStudent) => {
        console.log('******', newStudent);
        return res.redirect('/');
    }).catch((err) => {
        console.log("Error in adding student details!");
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