const Company = require('../models/company');

module.exports.renderPage = async function(req,res){
    try{
        const company = await Company.find({});

        return res.render('company',{ company} );
    }
    catch(err){
        console.log(`Error in fetching company list from db" ${err}`);
        return;
    }
}

module.exports.createCompany = function(req,res){
    
    Company.create({
        name: req.body.name,
        date: req.body.date
    })
    .then((newCompany) => {
        console.log('******', newCompany);
        return res.redirect('/company');
    })
    .catch((err) => {
        console.log(`Error in creating company record: ${err}`);
        return;
    });
} 

module.exports.deleteCompany =function(req,res){
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