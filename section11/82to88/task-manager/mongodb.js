// //83
// const {MongoClient,ObjectID} = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName="task-manager";

// const id = new ObjectID();

// MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
//     if(error){
//         return console.log("unable to connect database!");
//     }
//     const db=client.db(databaseName);
    
// const deleteUsers = db.collection("users").deleteOne({
//     age:19
// })

// deleteUsers.then((result)=>{
//     console.log(result.deletedCount);
// }).catch((error)=>{
//     console.log(error);
// })
// })