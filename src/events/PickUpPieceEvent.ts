import { EventType } from './IEvent';
import { Player } from 'models/IBoard';

export interface IPickUpPieceEvent {
  type: EventType.PICK_UP_PIECE;
  player: Player;
}

export const pickUpPieceEvent = (player: Player): IPickUpPieceEvent => ({
  type: EventType.PICK_UP_PIECE,
  player,
});
