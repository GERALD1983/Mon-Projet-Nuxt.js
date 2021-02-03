const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const nocache = require("nocache");
const cookieSession = require("cookie-session");

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

app.use(
  cookieSession({
    name: "session",
    secret: process.env.SECRET,
    cookie: {
      secure: true,
      httpOnly: true,
      domain: process.env.DOMAIN,
    },
  })
);

app.use(helmet());

console.log("salut mon site perso");

app.use(nocache());

app.use(bodyParser.json());

app.use(formRoutes);

module.exports = app;
