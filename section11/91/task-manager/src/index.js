const express = require("express");
require("./db/mongoose.js")
const Task = require("./models/task.js");
const User = require("./models/user.js");
// const User = require("./models/user.js")
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
// app.get("/users",(req,res)=>{
//      User.find({}).then((users)=>{
//         res.send(users)
//      }).catch((e)=>{
//         res.status(500).send(e)
//      })
// })
// app.get("/users/:id",(req,res)=>{
//    console.log(req.params);
// })
app.get("/users/:id",(req,res)=>{
    const id =req.params.id

    User.findById(id).then((user)=>{
         if(!user){
            return res.status(400).send()
         }
         res.send(user)
    }).catch((e)=>{
        res.status(500).send();
    })
//    console.log(req.params);
})

app.listen(port,()=>{
        console.log("app is listening in "+port);
})