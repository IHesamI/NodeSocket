require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// const login=require('./api/login');
const { Server } = require("socket.io");
// const { default: msgHandler } = require("./api/message");

const multer = require("multer");

const storage = multer.memoryStorage(); // Store chunks in memory
const upload = multer({ storage });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.error("hello");
});

// app.post('/login',login.login);

app.post("/msg", upload.single("chunk"), (req, res) => {
  try {
    console.error("zarp", req.file);
    res.send({ status: "200" });
  } catch (e) {
    res.send({ status: "403" });
  }
});

module.exports = app;
