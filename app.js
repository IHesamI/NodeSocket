const express = require("express");
const cors=require('cors');
const app = express();
const login=require('./api/login');
const { Server } = require("socket.io");

app.use(cors());

app.get("/", (req, res) => {
  console.error('hello');
});

app.get('/login',login.login);

module.exports = app;
