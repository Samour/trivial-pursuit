import { store } from 'store';
import { ICoordinate, Player } from 'models/IBoard';
import { startNewGameEvent } from 'events/StartNewGameEvent';
import { boardBase, boardConfiguration } from 'config/board';
import { AbstractDrawer } from './draw/AbstractDrawer';

class GameManagerService extends AbstractDrawer {

  private determinePlayerStartPosition(player: Player): ICoordinate {
    const homeCell = boardBase.outerCells.find(({ home }) => home === player);
    if (!homeCell) {
      throw new Error(`Could not find home cell for player ${player}`);
    }

    return this.polarToCartesian(
      (boardConfiguration.outerTrackInnerRadius + boardConfiguration.outerTrackOuterRadius) / 2,
      homeCell.offset + homeCell.size / 2,
      boardConfiguration.boardCenter,
    );
  }

  startNewGame(): void {
    const { selectedPlayers } = store.getState().newGameModal;

    store.dispatch(startNewGameEvent({
      playerPieces: selectedPlayers.map((player) => ({
        player,
        position: this.determinePlayerStartPosition(player),
      })),
    }));
  }
}

export const gameManagerService = new GameManagerService();
