const mongoose = require('mongoose');
const validator = require('validator');

// creating Schema

const empSchema = new mongoose.Schema({
    empName :{
        type:String,
        required:true,
        minlength:3
    },
    empAddress:{
        type:String,
        required:true,
    },
    empEmail:{
        type:String,
        required:true,
        unique:[true,"Email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
             throw new Error("Invalid Email");
            }
        }
    },
    empSalary:{
        type:Number,
        required:true,
    },
    empNumber:{
        type:Number,
        required:true,
        min:10,
        unique:true
    }


});

//creating schema

const Employee = new mongoose.model("Employee",empSchema);

module.exports = Employee;
