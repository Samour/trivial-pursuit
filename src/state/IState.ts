import { IGame } from 'models/IGame';
import { INewGameModal } from './INewGameModal';

export interface IState {
  game: IGame;
  newGameModal: INewGameModal;
}
