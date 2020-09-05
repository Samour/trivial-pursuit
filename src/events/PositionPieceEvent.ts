import { ICoordinate, Player } from 'models/IBoard';
import { EventType } from './IEvent';

export interface IPositionPieceEvent {
  type: EventType.POSITION_PIECE;
  player: Player;
  position: ICoordinate;
}

export const positionPieceEvent = (player: Player, position: ICoordinate): IPositionPieceEvent => ({
  type: EventType.POSITION_PIECE,
  player,
  position,
});
