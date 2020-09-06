import { IEvent } from 'events/IEvent';

export enum MessageType {
  REDUX_MUTATION = 'REDUX_MUTATION',
  REQUEST_GAME_STATE = 'REQUEST_GAME_STATE',
}

export interface IReduxMutationMessage {
  event: IEvent;
}

export interface IReceivedMessage<T> {
  sender: string;
  message: T;
}
