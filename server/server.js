const express = require('express');
const { createServer } = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const port = 5171;

const app = express();
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173'
  }
})

app.use(cors())


app.get('/room/:id', async (req,res) => {
  res.render('room', {roomID: req.params.id})
})

io.on('connection', socket =>{
  socket.on('join-room', (roomID, userID) =>{
    socket.join(roomID)

    socket.to(roomID).broadcast.emit('user-connected', userID)

    socket.on('disconnect', () => {
      socket.to(roomID).broadcast.emit('user-disconnected', userID)
    })

    socket.on('getNewVideo', (videoId) =>{
      io.emit('getNewvideo', videoId)
    })
    socket.on('pause', () =>{
      io.emit('pause')
    })
    socket.on('play', () =>{
      io.emit('play')
    })
  })
})

httpServer.listen(port, () =>{
    console.log("Servidor rodando na url http://localhost:5171");
});
