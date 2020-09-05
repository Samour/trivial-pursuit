import { EventType } from './IEvent';

export interface IOpenNewGameModalEvent {
  type: EventType.OPEN_NEW_GAME_MODAL;
}

export const openNewGameModalEvent = (): IOpenNewGameModalEvent => ({
  type: EventType.OPEN_NEW_GAME_MODAL,
});
