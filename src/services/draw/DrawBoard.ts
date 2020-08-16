import { IBoard, Category, ICellProfile } from 'models/IBoard';
import { IDrawOuterCell } from 'services/draw/DrawOuterCell';

export interface IDrawBoard {
  draw(ctx: CanvasRenderingContext2D, board: IBoard): void;
}

export class DrawBoard implements IDrawBoard {

  constructor(private readonly drawOuterCell: IDrawOuterCell) { }

  draw(ctx: CanvasRenderingContext2D, board: IBoard): void {
    const getProfile = (category: Category | undefined, home: string | undefined): ICellProfile | undefined => {
      if (category) {
        return board.profiles.find((p) => p.category === category);
      } else {
        return board.profiles.find((p) => p.home === home);
      }
    }

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
