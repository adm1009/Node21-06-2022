const express = require("express");
require("./db/mongoose.js");
const Task = require("./models/task.js");
const User = require("./models/user.js");
const userRouter = require("./router/user.js")
const taskRouter = require("./router/task.js")
const app = express();
app.use(express.json());
app.use(userRouter)
app.use(taskRouter)
// const router = new express.Router();
// router.get("/test",(req,res)=>{
//   res.send("from a router file")
// });
// app.use(router);
// const User = require("./models/user.js")

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log("app is listening in " + port);
});
