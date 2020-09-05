export enum EventType {
  OPEN_NEW_GAME_MODAL = 'OPEN_NEW_GAME_MODAL',
  CLOSE_NEW_GAME_MODAL = 'CLOSE_NEW_GAME_MODAL',
  NEW_GAME_SELECT_PLAYER = 'NEW_GAME_SELECT_PLAYER',
}

export interface IEvent {
  type: EventType;
}
