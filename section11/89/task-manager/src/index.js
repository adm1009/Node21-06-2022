const express = require("express");
require("./db/mongoose.js")
const User = require("./models/user.js")
const app = express();
app.use(express.json());
const port = process.env.PORT|| 3000;

app.post("/users",(req,res)=>{
    
    const user = new User(req.body);
    // console.log(user);
    user.save().then(()=>{
        res.send(user)
    }).catch((e)=>{
       res.status(400).send(e);
    })
});

app.listen(port,()=>{
        console.log("app is listening in "+port);
})