import { ICellProfile, IPlayerPieceConfiguration } from 'models/IBoard';
import { IPlayerPiece } from 'models/IGame';
import { getProfile } from 'utils/profileUtils';

export interface IDrawPlayerPiece {
  draw(ctx: CanvasRenderingContext2D, piece: IPlayerPiece, profiles: ICellProfile[]): void;
}

export class DrawPlayerPiece implements IDrawPlayerPiece {

  constructor(private readonly config: IPlayerPieceConfiguration) { }

  draw(ctx: CanvasRenderingContext2D, piece: IPlayerPiece, profiles: ICellProfile[]): void {
    ctx.beginPath();
    ctx.arc(
      piece.position.x, piece.position.y,
      this.config.innerRadius + this.config.playerRing + this.config.border,
      0, 2 * Math.PI,
    );
    ctx.fillStyle = this.config.borderColour;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
      piece.position.x, piece.position.y,
      this.config.innerRadius + this.config.playerRing,
      0, 2 * Math.PI,
    );
    ctx.fillStyle = getProfile(profiles, undefined, piece.player)?.colour || 'white';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(
      piece.position.x, piece.position.y,
      this.config.innerRadius,
      0, 2 * Math.PI,
    );
    ctx.fillStyle = this.config.emptyBg;
    ctx.fill();
  }
}
