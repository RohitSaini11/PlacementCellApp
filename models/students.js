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
    college: {
        type: String,
        required: true,
        
    },
    placed:{
        type:String,
        required:true,
        enum: ['Placed', 'Not Placed'],
    },
    dsa: {
        type: Number,
        required: true,
    },
    webd: {
        type: Number,
        required: true,
    },
    react: {
        type: Number,
        required: true,
    },
    interviews: [
        {
            company: {
                type: String,
            },
            date: {
                type: String,
            },
            result: {
                type: String,
                enum: ['On Hold', 'Selected', 'Pending', 'Not Selected', 'Did not Attempt'],
            },
        },
    ]
});

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;