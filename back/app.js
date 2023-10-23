const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require('cors')
// require database connection


// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// body parser configuration
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (request, response, next) => {
  response.json({ message: "Hey! This is your server response!" });
  next();
});

// register endpoint

// login endpoint
app.post("/login", (request, response) => {
  // check if email exists
});

// free endpoint
app.get("/free-endpoint", (request, response) => {
  response.json({ message: "You are free to access me anytime" });
});



app.get("/tennis", (request, response) => {
    response.json({response: "something something about tennis"})
});

app.get("/Rugby", (request, response) => {
  response.json({response: "something something about Rugby"})
});

app.get("/Football", (request, response) => {
  response.json({response: "something something about Footbal"})
});

app.get("/Volley", (request, response) => {
  response.json({response: "something something about Volley"})
});

app.get("/Cyclisme", (request, response) => {
  response.json({response: "something something about Cyclisme"})
});



module.exports = app;
