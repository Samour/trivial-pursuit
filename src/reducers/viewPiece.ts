import { IEvent, EventType } from 'events/IEvent';
import { IViewPiece } from 'state/IViewPiece';
import { IPickUpPieceEvent } from 'events/PickUpPieceEvent';

const defaultState: IViewPiece = {
  player: null,
};

export default function (state: IViewPiece | undefined, event: IEvent): IViewPiece {
  state = state || defaultState;
  if (event.type === EventType.PICK_UP_PIECE) {
    const { player } = event as IPickUpPieceEvent;
    return {
      ...state,
      player,
    };
  } else {
    return state;
  }
}
