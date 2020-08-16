import { IBoardConfiguration, IOuterCell, ICellProfile } from 'models/IBoard';
import { AbstractDrawer } from 'services/draw/AbstractDrawer';

export interface IDrawOuterCell {
  draw(ctx: CanvasRenderingContext2D, cell: IOuterCell, profile: ICellProfile): void;
}

export class DrawOuterCell extends AbstractDrawer implements IDrawOuterCell {

  constructor(private readonly boardConfiguration: IBoardConfiguration) {
    super();
  }

  draw(ctx: CanvasRenderingContext2D, cell: IOuterCell, profile: ICellProfile): void {
    ctx.beginPath();
    ctx.arc(
      this.boardConfiguration.boardCenter.x,
      this.boardConfiguration.boardCenter.y,
      this.boardConfiguration.outerTrackInnerRadius,
      cell.offset,
      cell.offset + cell.size,
    );
    const v1 = this.polarToCartesian(
      this.boardConfiguration.outerTrackOuterRadius,
      cell.offset + cell.size,
      this.boardConfiguration.boardCenter,
    );
    ctx.lineTo(v1.x, v1.y);
    ctx.arc(
      this.boardConfiguration.boardCenter.x,
      this.boardConfiguration.boardCenter.y,
      this.boardConfiguration.outerTrackOuterRadius,
      cell.offset + cell.size,
      cell.offset,
      true,
    );
    const v2 = this.polarToCartesian(
      this.boardConfiguration.outerTrackInnerRadius,
      cell.offset,
      this.boardConfiguration.boardCenter,
    );
    ctx.lineTo(v2.x, v2.y);
    ctx.fillStyle = profile.colour;
    ctx.fill();
  }

}
