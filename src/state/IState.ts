import { IGame } from 'models/IGame';
import { INewGameModal } from './INewGameModal';
import { IHoldingPiece } from './IHoldingPiece';

export interface IState {
  game: IGame;
  newGameModal: INewGameModal;
  holdingPiece: IHoldingPiece;
}
