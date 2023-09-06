/*this is user model(SCHMA).This schema contains firstName,lastName,email,password etc.*/

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const userSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:[true,"please enter your name"],
        length:[20,"name cannot exceed 20 character"],
        minLength:[3,"first name cannot less than 3 character"]
    },

    lastName:{
        type:String,
        required:[true,"please enter your name"],
        length:[30,"name cannot exceed 20 character"],
        minLength:[3,"last name cannot less than 3 character"]
    },

    number:{
        type:Number,
        required:[true,"please enter phone number"],
        length:[10,"number cannot exceed 10 character"]
    },

    company:{
        type:String,
        required:[true,"please enter company name"]
    },

    employeeId:{
        type:String,
        required:[true,"please enter employee Id"],
    },

    employeeRole:{
        type:String,
        required:[true,"please enter employee role"],
    },

    email:{
        type:String,
        required:[true,"please enter your email"],
        unique:true,
        validator:[validator.isEmail,"please enter valid email"]
    },

    password:{
        type:String,
        required:[true,"please enter valid password"],
        minLength:[8,"password should be greater than 8 character"],
        select:false
    }
});

userSchema.methods.getJWTToken = function () {
    
    const val = process.env.JWT_SECRET;
    //console.log("id: ",this._id,"role: ",this.role);
    const payload = {
        id: this._id,
        role: this.role
    }
    return jwt.sign({payload}, val, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

const User = mongoose.model("User",userSchema);
module.exports = User;