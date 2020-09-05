import { IBoardConfiguration, ICoordinate, ICellProfile } from 'models/IBoard';

export interface IDrawPlayerPiece {
  draw(ctx: CanvasRenderingContext2D, position: ICoordinate, profile: ICellProfile): void;
}

export class DrawPlayerPiece implements IDrawPlayerPiece {

  constructor(private readonly boardConfiguration: IBoardConfiguration) { }

  draw(ctx: CanvasRenderingContext2D, position: ICoordinate, profile: ICellProfile): void {
    ctx.beginPath();
    ctx.arc(
      position.x, position.y,
      this.boardConfiguration.playerPiece.innerRadius + this.boardConfiguration.playerPiece.border,
      0, 2 * Math.PI,
    );
    ctx.fillStyle = this.boardConfiguration.playerPiece.borderColour;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
      position.x, position.y,
      this.boardConfiguration.playerPiece.innerRadius,
      0, 2 * Math.PI,
    );
    ctx.fillStyle = profile.colour;
    ctx.fill();
  }
}
