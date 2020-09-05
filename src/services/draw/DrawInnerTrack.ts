import { IBoardConfiguration, IInnerTrack, ICell, ICellProfile } from 'models/IBoard';
import { getProfile } from 'utils/profileUtils';
import { IDrawInnerCell } from './DrawInnerCell';

export interface IDrawInnerTrack {
  draw(ctx: CanvasRenderingContext2D, innerTrack: IInnerTrack, profiles: ICellProfile[]): void;
}

export class DrawInnerTrack implements IDrawInnerTrack {

  constructor(private readonly boardConfiguration: IBoardConfiguration, private readonly drawInnerCell: IDrawInnerCell) { }

  private getInnermostCell(cells: ICell[]): ICell {
    return cells.reduce((cc, c) => !c || cc.offset < c.offset ? cc : c);
  }

  private getOutermostCell(cells: ICell[]): ICell {
    return cells.reduce((cc, c) => !c || cc.offset > c.offset ? cc : c);
  }

  draw(ctx: CanvasRenderingContext2D, innerTrack: IInnerTrack, profiles: ICellProfile[]): void {
    const offset = this.getInnermostCell(innerTrack.cells).offset;
    const size = ((c) => c.offset + c.size - offset)(this.getOutermostCell(innerTrack.cells));
    this.drawInnerCell.drawRect(
      ctx,
      innerTrack.angle,
      innerTrack.width,
      offset,
      size,
      this.boardConfiguration.gutterColour,
    );

    innerTrack.cells.forEach((c) => this.drawInnerCell.draw(
      ctx,
      innerTrack,
      c,
      getProfile(profiles, c.category, c.home) as ICellProfile,
    ));
  }
}
