import { Player, ICoordinate, Category } from './IBoard';

export interface IPlayerPiece {
  player: Player;
  position: ICoordinate;
  categories: Category[];
}

export interface IGame {
  playerPieces: IPlayerPiece[];
}
