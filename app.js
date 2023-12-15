const fs=require('fs');

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { Buffer} = require('node:buffer');
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
    // const image =buffer.from(req.file.buffer);
    console.error();
    const fsize=req.file.size
    const buf=req.file.buffer;
    const ws=fs.createWriteStream('img.bin',function(err){})
    ws.write(buf);
    ws.end();
    res.send({ status: "200" });
  } catch (e) {
    res.send({ status: "403" ,error:'zarp'});
  }
});
const CHUNK_SIZE= 1024;
app.get('/getmsg',async (req,res)=>{
  const imageBuffer= await fs.readFileSync('./img.bin');
  console.error(imageBuffer.length);
  const size=imageBuffer.length;
  let offset=0;
  while(offset<size){
    const chunk = imageBuffer.slice(offset, offset + CHUNK_SIZE);
    res.write(chunk);
    // res.write('data: ping');

    offset += CHUNK_SIZE;
  }

  res.end();

  // res.send({status:303,buffer:imageBuffer});
})

module.exports = app;
