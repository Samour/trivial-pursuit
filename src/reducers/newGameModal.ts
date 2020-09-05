import { INewGameModal } from 'state/INewGameModal';
import { IEvent, EventType } from 'events/IEvent';
import { INewGameSelectPlayerEvent } from 'events/NewGameSelectPlayerEvent';

const defaultState: INewGameModal = {
  open: false,
  selectedPlayers: [],
};

export default function (state: INewGameModal | undefined, event: IEvent): INewGameModal {
  state = state || defaultState;
  if (event.type === EventType.OPEN_NEW_GAME_MODAL) {
    return {
      ...state,
      open: true,
    };
  } else if (event.type === EventType.CLOSE_NEW_GAME_MODAL) {
    return defaultState;
  } else if (event.type === EventType.NEW_GAME_SELECT_PLAYER) {
    const { player, selected } = event as INewGameSelectPlayerEvent;
    const selectedPlayers = state.selectedPlayers.filter((p) => p !== player);
    if (selected) {
      selectedPlayers.push(player);
    }
    return {
      ...state,
      selectedPlayers,
    };
  } else {
    return state;
  }
}
