import { Player, ICoordinate } from './IBoard';

export interface IPlayerPiece {
  player: Player;
  position: ICoordinate;
}

export interface IGame {
  playerPieces: IPlayerPiece[];
}
