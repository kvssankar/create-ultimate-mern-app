module.exports=`const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const app = express();

app.use(express.json());
const server = require("http").createServer(app);

const db = config.get("mongoURI");

//connect to mongo
const connect = mongoose
  .connect(db, {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Mondo db connected...."))
  .catch((err) => console.log(err));
//connect to mongo

//routes
app.use("/api", require("./routes/testRoute.js"));
//routes

const port = process.env.PORT || 5000;

server.listen(port, () => console.log("sever started in 5000"));
`