import { IEvent, EventType } from 'events/IEvent';
import { IPickUpPieceEvent } from 'events/PickUpPieceEvent';
import { IHoldingPiece } from 'state/IHoldingPiece';

const defaultState = {
  player: null,
};

export default function (state: IHoldingPiece | undefined, event: IEvent): IHoldingPiece {
  state = state || defaultState;
  if (event.type === EventType.PICK_UP_PIECE) {
    const { player } = event as IPickUpPieceEvent;
    return {
      ...state,
      player,
    };
  } else if (event.type === EventType.SET_DOWN_PIECE) {
    return {
      ...state,
      player: null,
    };
  } else {
    return state;
  }
}
