require("../db/mongoose.js");
const Task = require("../models/task.js");

Task.findByIdAndDelete("62ac7b185cbe3f01e444fb2b").then(()=>{
    console.log("id removed");
    return Task.countDocuments({completed:false})
}).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})