import io from 'socket.io-client';
import { store } from 'store';
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
    this.socket = io(`${config.baseUrl}/${namespace}`);
    store.dispatch(connectionNamespaceEvent(this.namespace));
  }

  disconnect(): void {
    this.socket?.disconnect();
    store.dispatch(connectionNamespaceEvent(''));
  }
}

export const communicationService = new CommunicationService();
