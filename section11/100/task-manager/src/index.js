const express = require("express");
require("./db/mongoose.js");
const Task = require("./models/task.js");
const User = require("./models/user.js");
// const User = require("./models/user.js")
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.post("/tasks", async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});
app.get("/tasks", async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.get("/tasks/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const task = await Task.findById(id);
    if (!task) {
      res.status(400);
    }
    res.status(200).send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.get("/users", async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(400);
    }
    res.status(200).send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});
app.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "Email", "age", "password"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });
  if (!isValidOperation) {
    return res.status(404).send({ error: "Invalid Field" });
  }
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      res.status(500).send("Error:- User not present");
    }
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.delete("/users/:id",async(req,res)=>{
    try{
      const user = await User.findByIdAndDelete (req.params.id)
      if(!user){
        res.status(500).send({error:"user not found"})
      }
      res.status(200).send(user)
    }catch(e){
      res.status(400).send(e)
    }
})
app.delete("/tasks/:id",async(req,res)=>{
  try{
    const task =await Task.findByIdAndDelete(req.params.id);
    if(!task){
      res.status(500).send({error:"task not found"})
    }
    res.status(200).send(task)
  }catch(e){
    res.status(400).send(e)
  }
})
app.patch("/tasks/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });
  if (!isValidOperation) {
    return res.status(500).send({ error: "Invalid parameter" });
  }
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(400).send({ error: "task is not present" });
    }
    res.status(200).send(task);
  } catch (e) {
    res.status(500).send(e);
  }
});
app.listen(port, () => {
  console.log("app is listening in " + port);
});
