require("../db/mongoose.js");
const User =require("../models/user.js");
User.findByIdAndUpdate("62affba706512803b4328c4f",{age:12}).then((user)=>{
    console.log(user);
    return User.countDocuments({age:12})
}).then((counted)=>{
    console.log(counted);
}).catch((e)=>{
        console.log(e);
    })
