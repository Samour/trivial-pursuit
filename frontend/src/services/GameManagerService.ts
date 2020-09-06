import { store } from 'store';
import { ICoordinate, Player, Category } from 'models/IBoard';
import { startNewGameEvent } from 'events/StartNewGameEvent';
import { assignPlayerCategoryEvent } from 'events/AssignPlayerCategoryEvent';
import { boardBase, boardConfiguration } from 'config/board';
import { communicationService } from 'services/CommunicationService';
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
    const event = startNewGameEvent({
      playerPieces: selectedPlayers.map((player) => ({
        player,
        position: this.determinePlayerStartPosition(player),
        categories: [],
      })),
    });

    store.dispatch(event);
    communicationService.publishMutation(event);
  }

  assignPlayerCategory(player: Player, category: Category, hasCategory: boolean): void {
    const event = assignPlayerCategoryEvent(player, category, hasCategory);
    store.dispatch(event);
    communicationService.publishMutation(event);
  }
}

export const gameManagerService = new GameManagerService();
