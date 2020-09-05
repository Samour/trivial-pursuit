import { combineReducers } from 'redux';
import { IState } from 'state/IState';
import game from './game';
import newGameModal from './newGameModal';
import holdingPiece from './holdingPiece';

export default combineReducers<IState>({
  game,
  newGameModal,
  holdingPiece,
});
