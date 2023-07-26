const mongoose= require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    batch:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    placed:{
        type:String,
        required:true
    }
});

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;