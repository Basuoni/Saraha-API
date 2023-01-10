const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
mongoose.set("strictQuery", false);

// mongoose.connect('mongodb+srv://basuoni:3122020@cluster0.oba4pbh.mongodb.net/saraha').then((e)=>{console.log("Done") })

app.use(express.json());
app.use("/user", require("./apis/user.api"));
app.use("/message", require("./apis/message.api"));
app.get("/", (req, res) => res.send("Welcome To My API 'Saraha' , By Ahmed Basuoni!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//const link =  'mongodb://0.0.0.0:27017/saraha'
const link = "mongodb+srv://saraha:3122020@cluster0.oba4pbh.mongodb.net/saraha";
 // 'mongodb+srv://basuoni:3122020@cluster0.oba4pbh.mongodb.net/saraha',
mongoose.connect(
  link,
  () => {
    console.log("mongdb is online connected");
  }
);
