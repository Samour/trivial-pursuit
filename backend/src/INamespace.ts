import { IOutgoingMessage } from 'IMessages';

export interface INamespace {
  name: string;
  clients: Set<string>;
  messages: IOutgoingMessage[];
}
