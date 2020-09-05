import { IInnerTrack, ICell, ICellProfile, IBoardConfiguration, ICoordinate } from 'models/IBoard';

export interface IDrawInnerCell {
  drawRect(ctx: CanvasRenderingContext2D, angle: number, width: number, offset: number, size: number,
    colour: string): void;
  draw(ctx: CanvasRenderingContext2D, innerTrack: IInnerTrack, cell: ICell, cellProfile: ICellProfile): void;
}

export class DrawInnerCell implements IDrawInnerCell {

  constructor(private readonly boardConfiguration: IBoardConfiguration) { }

  private rotateCoordinate({ x, y }: ICoordinate, angle: number): ICoordinate {
    return {
      x: x * Math.cos(angle) - y * Math.sin(angle),
      y: y * Math.cos(angle) + x * Math.sin(angle),
    };
  }

  private translateCooridinate(coord: ICoordinate, translate: ICoordinate): ICoordinate {
    return {
      x: coord.x + translate.x,
      y: coord.y + translate.y,
    };
  }

  drawRect(ctx: CanvasRenderingContext2D, angle: number, width: number, offset: number, size: number,
    colour: string): void {
    const convertCoord = (coord: ICoordinate): ICoordinate => this.translateCooridinate(
      this.rotateCoordinate(coord, angle),
      this.boardConfiguration.boardCenter,
    );
    const topLeft: ICoordinate = convertCoord({
      x: offset,
      y: width / 2,
    });
    const topRight: ICoordinate = convertCoord({
      x: offset + size,
      y: width / 2,
    });
    const bottomLeft: ICoordinate = convertCoord({
      x: offset,
      y: -width / 2,
    });
    const bottomRight = convertCoord({
      x: offset + size,
      y: -width / 2,
    });


    ctx.beginPath();
    ctx.moveTo(topLeft.x, topLeft.y);
    ctx.lineTo(topRight.x, topRight.y);
    ctx.lineTo(bottomRight.x, bottomRight.y);
    ctx.lineTo(bottomLeft.x, bottomLeft.y);
    ctx.lineTo(topLeft.x, topLeft.y);
    ctx.fillStyle = colour;
    ctx.fill();
  }

  draw(ctx: CanvasRenderingContext2D, innerTrack: IInnerTrack, cell: ICell, cellProfile: ICellProfile): void {
    this.drawRect(
      ctx,
      innerTrack.angle,
      innerTrack.width - 2 * this.boardConfiguration.trackGutter,
      cell.offset + this.boardConfiguration.trackGutter,
      cell.size - 2 * this.boardConfiguration.trackGutter,
      cellProfile.colour,
    )
  }
}
