const express = require("express");
const app = express();
const { Server } = require("socket.io");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

module.exports = app;