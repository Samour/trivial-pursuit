import { EventType } from './IEvent';

export interface ICloseNewGameModalEvent {
  type: EventType.CLOSE_NEW_GAME_MODAL;
}

export const closeNewGameModalEvent = (): ICloseNewGameModalEvent => ({
  type: EventType.CLOSE_NEW_GAME_MODAL,
});
