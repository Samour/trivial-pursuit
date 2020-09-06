import { IBoardConfiguration, ICell, ICellProfile } from 'models/IBoard';
import { AbstractDrawer } from 'services/draw/AbstractDrawer';

export interface IDrawOuterCell {
  drawSlice(ctx: CanvasRenderingContext2D, radiusInner: number, radiusOuter: number, thStart: number, thEnd: number,
    colour: string): void
  draw(ctx: CanvasRenderingContext2D, cell: ICell, profile: ICellProfile): void;
}

export class DrawOuterCell extends AbstractDrawer implements IDrawOuterCell {

  constructor(private readonly boardConfiguration: IBoardConfiguration) {
    super();
  }

  drawSlice(ctx: CanvasRenderingContext2D, radiusInner: number, radiusOuter: number, thStart: number,
    thEnd: number, colour: string): void {
    ctx.beginPath();
    ctx.arc(
      this.boardConfiguration.boardCenter.x,
      this.boardConfiguration.boardCenter.y,
      radiusInner,
      thStart,
      thEnd,
    );
    const v1 = this.polarToCartesian(
      this.boardConfiguration.outerTrackOuterRadius,
      thEnd,
      this.boardConfiguration.boardCenter,
    );
    ctx.lineTo(v1.x, v1.y);
    ctx.arc(
      this.boardConfiguration.boardCenter.x,
      this.boardConfiguration.boardCenter.y,
      radiusOuter,
      thEnd,
      thStart,
      true,
    );
    const v2 = this.polarToCartesian(
      this.boardConfiguration.outerTrackInnerRadius,
      thStart,
      this.boardConfiguration.boardCenter,
    );
    ctx.lineTo(v2.x, v2.y);
    ctx.fillStyle = colour;
    ctx.fill();
  }

  draw(ctx: CanvasRenderingContext2D, cell: ICell, profile: ICellProfile): void {
    const guttInRad = this.boardConfiguration.trackGutter / this.boardConfiguration.outerTrackInnerRadius / 2;
    this.drawSlice(
      ctx,
      this.boardConfiguration.outerTrackInnerRadius + this.boardConfiguration.trackGutter,
      this.boardConfiguration.outerTrackOuterRadius - this.boardConfiguration.trackGutter,
      cell.offset + guttInRad,
      cell.offset + cell.size - guttInRad,
      profile.colour,
    );
  }

}
