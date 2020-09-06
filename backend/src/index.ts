import * as http from 'http';
import * as express from 'express';
import * as socketio from 'socket.io';
import { v4 as uuid } from 'uuid';
import { IIncomingMessage } from 'IMessages';

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  serveClient: false,
});

app.get('/hello', (req, res) => res.send({ message: 'Hello World!' }));

const boards = io.of(/^\/\w+$/);
boards.on('connection', (socket) => {
  const sessionId = uuid();
  console.log(`Client connected; sessionId=${sessionId}`);

  socket.on('message', (message: IIncomingMessage) => {
    console.log(`Message received from client ${sessionId}`);
    console.log(message);
    socket.broadcast.nsp.emit('message', {
      sender: sessionId,
      message,
    });
  });

  socket.on('disconnect', () => {
    console.log(`Client disconnected; sessionId=${sessionId}`);
  });
});

server.listen(8080);
