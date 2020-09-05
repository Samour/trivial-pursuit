import { EventType } from './IEvent';

export interface ISetDownPieceEvent {
  type: EventType.SET_DOWN_PIECE;
}

export const setDownPieceEvent = (): ISetDownPieceEvent => ({
  type: EventType.SET_DOWN_PIECE,
});
