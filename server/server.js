const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

app.get('/room/:id', async (req,res) => {
  res.render('room', {roomID: req.params.id})
})

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("send_url", (data) => {
    socket.broadcast.emit("receive_url", data);
  });

  //     socket.on('pause', () =>{
  //       io.emit('pause')
  //     })
  //     socket.on('play', () =>{
  //       io.emit('play')
  //     })
});


httpServer.listen(5171, () => {
  console.log("Servidor rodando na url http://localhost:5171");
});