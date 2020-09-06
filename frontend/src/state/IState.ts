import { IGame } from 'models/IGame';
import { INewGameModal } from './INewGameModal';
import { IHoldingPiece } from './IHoldingPiece';
import { IViewPiece } from './IViewPiece';

export interface IState {
  game: IGame;
  newGameModal: INewGameModal;
  holdingPiece: IHoldingPiece;
  viewPiece: IViewPiece;
}
