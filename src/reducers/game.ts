import { IGame } from 'models/IGame';
import { IEvent } from 'events/IEvent';

const defaultState: IGame = {
  playerPieces: [],
};

export default function(state: IGame | undefined, event: IEvent): IGame {
  return state || defaultState;
}
