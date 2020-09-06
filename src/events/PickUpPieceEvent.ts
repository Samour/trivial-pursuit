import { Player } from 'models/IBoard';
import { EventType } from './IEvent';

export interface IPickUpPieceEvent {
  type: EventType.PICK_UP_PIECE;
  player: Player;
}

export const pickUpPieceEvent = (player: Player): IPickUpPieceEvent => ({
  type: EventType.PICK_UP_PIECE,
  player,
});
