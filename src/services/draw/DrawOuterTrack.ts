import { IBoard, IBoardConfiguration } from 'models/IBoard';
import { IDrawOuterCell } from 'services/draw/DrawOuterCell';
import { getProfile } from 'utils/profileUtils';

export interface IDrawOuterTrack {
  draw(ctx: CanvasRenderingContext2D, board: IBoard): void;
}

export class DrawOuterTrack implements IDrawOuterTrack {

  constructor(private readonly boardConfiguration: IBoardConfiguration, private readonly drawOuterCell: IDrawOuterCell) { }

  draw(ctx: CanvasRenderingContext2D, board: IBoard): void {
    this.drawOuterCell.drawSlice(
      ctx,
      this.boardConfiguration.outerTrackInnerRadius,
      this.boardConfiguration.outerTrackOuterRadius,
      0,
      2 * Math.PI,
      'white',
    );
    for (let cell of board.outerCells) {
      const profile = getProfile(board.profiles, cell.category, cell.home);
      if (!profile) {
        console.group();
        console.error('Could not find profile for cell');
        console.error(cell);
        console.groupEnd();
        continue;
      }
      this.drawOuterCell.draw(ctx, cell, profile);
    }
  }

}