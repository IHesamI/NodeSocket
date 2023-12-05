const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server =http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
  cors:{
    origin:'*',
  }
});

io.on("connection", (socket) => {
  console.log('use connect to socket')  
  socket.on("chat message", (msg) => {
    io.emit('chat message',msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});


server.listen(port, () => {
    console.log("listening on port 3000");
  });
  
module.exports=server