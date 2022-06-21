const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User",{
    name:{
                type:String,
                required:true,
                trim:true
            },
            Email:{
                type:String,
                required:true,
                trim:true,
                lowercase:true,
                validate(value){
                    if(!validator.isEmail(value)){
                       throw new Error("Email Error")
                    }
                }
            },
            age:{
                type:Number,
                required:true,
                validate(value){
                    if(value<0){
                        throw new Error("age Error");
                    }
                }
            },
            password:{
                type:String,
                required:true,
                trim:true,
                minLength:7,
                validate(value){
                    if(value.toLowerCase().includes("password")){
                        throw new Error("password not to be password")
                    }
                }
            }
})

module.exports = User;