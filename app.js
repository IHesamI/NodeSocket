require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authHandler = require("./api/login");
const { Server } = require("socket.io");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  // console.error('hello');
});

app.post("/login", authHandler.login);

app.post("/register", authHandler.register);

module.exports = app;
