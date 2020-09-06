import { IEvent } from 'events/IEvent';

export enum MessageType {
  REDUX_MUTATION = 'REDUX_MUTATION',
}

export interface IMessage {
  type: MessageType;
}

export interface IReduxMutationMessage {
  type: MessageType.REDUX_MUTATION;
  event: IEvent;
}

export interface IReceivedMessage {
  sender: string;
  message: IMessage;
}
