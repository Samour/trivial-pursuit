import { IBoard, Category, ICellProfile, IBoardConfiguration } from 'models/IBoard';
import { IDrawOuterCell } from 'services/draw/DrawOuterCell';

export interface IDrawBoard {
  draw(ctx: CanvasRenderingContext2D, board: IBoard): void;
}

export class DrawBoard implements IDrawBoard {

  constructor(private readonly boardConfiguration: IBoardConfiguration, readonly drawOuterCell: IDrawOuterCell) { }

  draw(ctx: CanvasRenderingContext2D, board: IBoard): void {
    const getProfile = (category: Category | undefined, home: string | undefined): ICellProfile | undefined => {
      if (category) {
        return board.profiles.find((p) => p.category === category);
      } else {
        return board.profiles.find((p) => p.home === home);
      }
    }

    this.drawOuterCell.drawSlice(
      ctx,
      this.boardConfiguration.outerTrackInnerRadius,
      this.boardConfiguration.outerTrackOuterRadius,
      0,
      2 * Math.PI,
      'white',
    );
    for (let cell of board.outerCells) {
      const profile = getProfile(cell.category, cell.home);
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
