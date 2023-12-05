const express = require("express");
const app = express();
const login=require('./api/login');
const { Server } = require("socket.io");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/index.html");
});

app.get('/login',login.login);

module.exports = app;
