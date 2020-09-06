export enum MessageType {
  REDUX_MUTATION = 'REDUX_MUTATION',
  REQUEST_GAME_STATE = 'REQUEST_GAME_STATE',
}

export type IIncomingMessage = any;

export interface IOutgoingMessage {
  sender: string;
  message: IIncomingMessage;
}
