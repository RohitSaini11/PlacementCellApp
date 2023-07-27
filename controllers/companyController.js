const Company = require('../models/company');
const Student = require('../models/students');


module.exports.renderPage = async function(req,res){
    try{
        const company = await Company.find({});
        const students = await Student.find({});

        return res.render('company',{ company , students} );
    }
    catch(err){
        console.log(`Error in fetching company list from db" ${err}`);
        return;
    }
}

module.exports.createCompany = async function(req,res){

    const {id,name,date} = req.body;
    try{
        const existingCompany = await Company.findOne({name});
        const obj = {
            student: id,
            date,
            result: 'Pending',
        };
        //if company does not exist
        if(!existingCompany){
            const newCompany = await Company.create({name});
            newCompany.students.push(obj);
            newCompany.save();
        }
        else{
            for(let student of existingCompany.students){
                if(student.student._id === id){
                    console.log('Interview with this student already Scheduled');
                    return res.redirect('back');
                }
            }
            existingCompany.students.push(obj);
            existingCompany.save();
        }

        const student = await Student.findById(id);

        if(student){
            const interview = {
                company: name,
                date,
                result:'Pending'
            };
            student.interviews.push(interview);
            student.save();
        }
        console.log('Interview Scheduled Successfully');
        return res.redirect('/company');

    }catch(err){
        console.log(`Error in Sheduling interview: ${err}`);
        return res.redirect('back');
    }
} 

// update status of interview
module.exports.updateStatus = async function (req, res){
    const { id } = req.params;
    const { companyName, companyResult } = req.body;
    try {
      const student = await Student.findById(id);
      if (student && student.interviews.length > 0) {
        for (let company of student.interviews) {
          if (company.company === companyName) {
            company.result = companyResult;
            student.save();
            break;
          }
        }
      }
      
      const company = await Company.findOne({ name: companyName });
  
      if (company) {
        for (let std of company.students) {
          /// compare student id and id passed in params
          if (std.student.toString() === id) {
            std.result = companyResult;
            company.save();
          }
        }
      }
      console.log('Interview Status Changed Successfully');
      return res.redirect('back');
    } catch (error) {
      console.log(`Error in updating status: ${error}`);
      res.redirect('back');
    }
};

module.exports.deleteCompany = function(req,res){
    const {id} = req.query;
    Company.findByIdAndDelete(id)
    .then(()=>{
        console.log('deleted the company');
        return res.redirect('/company');
    })
    .catch((err) => {
        console.log(`Error in creating company record: ${err}`);
        return;
    });
}

module.exports.addCompany = async function(req,res){
    try{
        const company = await Company.find({});
        const student = await Student.find({});

        return res.render('addCompany',{ student });
    }
    catch(err){
        console.log(`Error in fetching company list from db" ${err}`);
        return;
    }
   
}
