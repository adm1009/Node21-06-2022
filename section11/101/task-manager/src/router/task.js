const express = require("express");
const router = new express.Router();
const Task = require("../models/task.js");
// const app= express()
router.post("/tasks", async (req, res) => {
    const task = new Task(req.body);
    try {
      await task.save();
      res.status(200).send(task);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  router.get("/tasks", async (req, res) => {
    try {
      const task = await Task.find({});
      res.status(200).send(task);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  router.get("/tasks/:id", async (req, res) => {
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
  
  router.patch("/tasks/:id", async (req, res) => {
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

  module.exports = router;