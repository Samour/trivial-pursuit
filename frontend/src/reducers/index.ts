import { combineReducers } from 'redux';
import { IState } from 'state/IState';
import game from './game';
import newGameModal from './newGameModal';
import holdingPiece from './holdingPiece';
import viewPiece from './viewPiece';

export default combineReducers<IState>({
  game,
  newGameModal,
  holdingPiece,
  viewPiece,
});
