import { EventType } from './IEvent';
import { Player } from 'models/IBoard';

export interface INewGameSelectPlayerEvent {
  type: EventType.NEW_GAME_SELECT_PLAYER,
  player: Player,
  selected: boolean;
}

export const newGameSelectPlayerEvent = (player: Player, selected: boolean): INewGameSelectPlayerEvent => ({
  type: EventType.NEW_GAME_SELECT_PLAYER,
  player,
  selected,
});
