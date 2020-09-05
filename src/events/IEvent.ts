export enum EventType {
  OPEN_NEW_GAME_MODAL = 'OPEN_NEW_GAME_MODAL',
  CLOSE_NEW_GAME_MODAL = 'CLOSE_NEW_GAME_MODAL',
  NEW_GAME_SELECT_PLAYER = 'NEW_GAME_SELECT_PLAYER',
  START_NEW_GAME = 'START_NEW_GAME',
  PICK_UP_PIECE = 'PICK_UP_PIECE',
  SET_DOWN_PIECE = 'SET_DOWN_PIECE',
  POSITION_PIECE = 'POSITION_PIECE',
}

export interface IEvent {
  type: EventType;
}
