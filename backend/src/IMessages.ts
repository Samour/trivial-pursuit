export type IIncomingMessage = any;

export interface IOutgoingMessage {
  sender: string;
  message: IIncomingMessage;
}
