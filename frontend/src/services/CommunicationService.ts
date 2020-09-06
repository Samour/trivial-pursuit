import io from 'socket.io-client';
import { store } from 'store';
import { IReceivedMessage, MessageType, IReduxMutationMessage } from 'models/IMessage';
import { IEvent } from 'events/IEvent';
import { connectionNamespaceEvent } from 'events/ConnectionNamespaceEvent';
import { configProvider } from 'services/configProvider';

const NAMESPACE_CHARS = 'abcdefghijklmnopqrstuvwxyz1234567890';
const NAMESPACE_LENGTH = 8;

class CommunicationService {

  private namespace: string = '';
  private socket?: SocketIOClient.Socket;
  
  private generateNamespace(): string {
    let namespace = '';
    for (let i = 0; i < NAMESPACE_LENGTH; i++) {
      namespace += NAMESPACE_CHARS.charAt(Math.random() * NAMESPACE_CHARS.length);
    }

    return namespace;
  }

  getNamespace(): string {
    return this.namespace;
  }

  async connect(namespace?: string): Promise<void> {
    const config = await configProvider();

    if (this.socket) {
      if (this.namespace === namespace) {
        return;
      }
      this.socket.disconnect();
    }

    this.namespace = namespace || this.generateNamespace();
    this.socket = io(`${config.baseUrl}/${this.namespace}`);
    store.dispatch(connectionNamespaceEvent(this.namespace));

    this.socket.on('message', (message: IReceivedMessage) => {
      if (message.message.type === MessageType.REDUX_MUTATION) {
        const { event } = message.message as IReduxMutationMessage;
        store.dispatch(event);
      }
    });
  }

  publishMutation(event: IEvent): void {
    const message: IReduxMutationMessage = {
      type: MessageType.REDUX_MUTATION,
      event,
    };
    this.socket?.emit('message', message);
  }

  disconnect(): void {
    this.socket?.disconnect();
    store.dispatch(connectionNamespaceEvent(''));
  }
}

export const communicationService = new CommunicationService();
