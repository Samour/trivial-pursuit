import { ICoordinate } from 'models/IBoard';
import { boardConfiguration } from 'config/board';
import { pickUpPieceEvent } from 'events/PickUpPieceEvent';
import { setDownPieceEvent } from 'events/SetDownPieceEvent';
import { positionPieceEvent } from 'events/PositionPieceEvent';
import { communicationService } from 'services/CommunicationService';
import { store } from 'store';

class PlayerEventHandlerService {

  private getDistance(pos1: ICoordinate, pos2: ICoordinate): number {
    return Math.sqrt((pos1.x - pos2.x) ** 2 + (pos1.y - pos2.y) ** 2);
  }

  handleMouseDownEvent(el: HTMLCanvasElement, x: number, y: number): void {
    const clickPos = {
      x: x - el.getBoundingClientRect().x,
      y: y - el.getBoundingClientRect().y,
    };

    const piece = store.getState().game.playerPieces.find(({ position }) =>
      this.getDistance(clickPos, position) <=
      boardConfiguration.playerPiece.border + boardConfiguration.playerPiece.innerRadius
    );
    if (!piece) {
      return;
    }

    store.dispatch(pickUpPieceEvent(piece.player));
  }

  handleMouseUpEvent(): void {
    store.dispatch(setDownPieceEvent());
  }

  handleMouseMoveEvent(el: HTMLCanvasElement, x: number, y: number): void {
    const movePos = {
      x: x - el.getBoundingClientRect().x,
      y: y - el.getBoundingClientRect().y,
    };

    const piece = store.getState().holdingPiece.player;
    if (!piece) {
      return;
    }

    const event = positionPieceEvent(piece, movePos);
    store.dispatch(event);
    communicationService.publishMutation(event);
  }
}

export const playerClickHandlerService = new PlayerEventHandlerService();
