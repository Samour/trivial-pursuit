import { IGame } from 'models/IGame';
import { IEvent, EventType } from 'events/IEvent';
import { IStartNewGameEvent } from 'events/StartNewGameEvent';
import { IPositionPieceEvent } from 'events/PositionPieceEvent';
import { IAssignPlayerCategoryEvent } from 'events/AssignPlayerCategoryEvent';

const defaultState: IGame = {
  playerPieces: [],
};

export default function (state: IGame | undefined, event: IEvent): IGame {
  state = state || defaultState;
  if (event.type === EventType.START_NEW_GAME) {
    const { game } = event as IStartNewGameEvent;
    return game;
  } else if (event.type === EventType.POSITION_PIECE) {
    const { player, position } = event as IPositionPieceEvent;
    return {
      ...state,
      playerPieces: state.playerPieces.map((p) => p.player === player ? {
        ...p,
        position,
      } : p),
    };
  } else if (event.type === EventType.ASSIGN_PLAYER_CATEGORY) {
    const { player, category, hasCategory } = event as IAssignPlayerCategoryEvent;
    return {
      ...state,
      playerPieces: state.playerPieces.map((p) => {
        if (p.player !== player) {
          return p;
        }

        const categories = p.categories.filter((c) => c !== category);
        if (hasCategory) {
          categories.push(category);
        }
        categories.sort();

        return {
          ...p,
          categories,
        };
      }),
    };
  } else {
    return state;
  }
}
