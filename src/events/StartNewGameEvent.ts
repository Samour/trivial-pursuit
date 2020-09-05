import { IGame } from 'models/IGame';
import { EventType } from './IEvent';

export interface IStartNewGameEvent {
  type: EventType.START_NEW_GAME;
  game: IGame;
}

export const startNewGameEvent = (game: IGame): IStartNewGameEvent => ({
  type: EventType.START_NEW_GAME,
  game,
});
