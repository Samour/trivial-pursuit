import * as http from 'http';
import * as express from 'express';
import * as socketio from 'socket.io';
import { v4 as uuid } from 'uuid';
import { IIncomingMessage, MessageType } from './IMessages';
import { boardService } from './boardService';

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
  boardService.clientConnected(socket, sessionId);

  socket.on(MessageType.REDUX_MUTATION, (message: IIncomingMessage) => {
    console.log(`Message received from client ${sessionId} in namespace ${socket.nsp.name}`);
    console.log(message);
    boardService.mutationOccurred(socket, { sender: sessionId, message });
  });

  socket.on('disconnect', () => {
    console.log(`Client disconnected; sessionId=${sessionId}`);
    boardService.clientDisconnected(socket.nsp.name, sessionId);
  });
});

server.listen(8080);
