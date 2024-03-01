const express = require("express");
const path = require("path");
const router = require("./modules/products/router");
const { MongoClient } = require("mongodb");
//set up Express object and port
const app = express();
const port = process.env.PORT || "8888";

//test message

//set up server listening

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use("/", router);
app.use(express.static(path.join(__dirname, "public")));
