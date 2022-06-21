const express = require("express");
require("./db/mongoose.js")
const Task = require("./models/task.js")
const app = express();
app.use(express.json());
const port = process.env.PORT|| 3000;

app.post("/tasks",(req,res)=>{
    
    const task = new Task(req.body);
    // console.log(user);
    task.save().then(()=>{
        res.send(task)
    }).catch((e)=>{
       res.status(400).send(e);
    })
});

app.listen(port,()=>{
        console.log("app is listening in "+port);
})