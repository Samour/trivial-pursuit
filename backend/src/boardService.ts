import { Socket } from 'socket.io';
import { INamespace } from 'INamespace';
import { IOutgoingMessage, MessageType } from './IMessages';

class BoardService {

  private readonly boards: Map<string, INamespace> = new Map();

  clientConnected(socket: Socket, sessionId: string): void {
    if (this.boards.has(socket.nsp.name)) {
      this.boards.get(socket.nsp.name).messages.forEach((m) => socket.emit(MessageType.REDUX_MUTATION, m));
    } else {
      this.boards.set(socket.nsp.name, {
        name: socket.nsp.name,
        clients: new Set(),
        messages: [],
      });
      socket.emit(MessageType.REQUEST_GAME_STATE, {});
    }
    this.boards.get(socket.nsp.name).clients.add(sessionId);
  }

  mutationOccurred(socket: Socket, message: IOutgoingMessage): void {
    socket.broadcast.nsp.emit(MessageType.REDUX_MUTATION, message);
    this.boards.get(socket.nsp.name)?.messages.push(message);
  }

  clientDisconnected(namespace: string, sessionId: string): void {
    if (!this.boards.has(namespace)) {
      return;
    }
    this.boards.get(namespace).clients.delete(sessionId);
    if (this.boards.get(namespace).clients.size === 0) {
      this.boards.delete(namespace);
    }
  }
}

export const boardService = new BoardService();
