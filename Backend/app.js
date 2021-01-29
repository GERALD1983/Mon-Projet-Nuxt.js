const express = require("express");
const bodyParser = require("body-parser");

const formRoutes = require("./routes/form");

const app = express();

require("dotenv").config();

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

console.log("salut mon site perso");

app.use(bodyParser.json());

app.use(formRoutes);

module.exports = app;
