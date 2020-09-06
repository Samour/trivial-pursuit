import { ICellProfile, IPlayerPieceConfiguration } from 'models/IBoard';
import { IPlayerPiece } from 'models/IGame';
import { getProfile } from 'utils/profileUtils';
import { winnableCategories } from 'config/board';
import { AbstractDrawer } from './AbstractDrawer';

export interface IDrawPlayerPiece {
  draw(ctx: CanvasRenderingContext2D, piece: IPlayerPiece, profiles: ICellProfile[]): void;
}

export class DrawPlayerPiece extends AbstractDrawer implements IDrawPlayerPiece {

  constructor(private readonly config: IPlayerPieceConfiguration) {
    super();
  }

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

    piece.categories.forEach((c, i) => {
      const th1 = i * 2 * Math.PI / winnableCategories.length;
      const th2 = (i + 1) * 2 * Math.PI / winnableCategories.length;
      const pos1 = this.polarToCartesian(this.config.innerRadius, th1, piece.position);
      ctx.beginPath();
      ctx.moveTo(piece.position.x, piece.position.y);
      ctx.lineTo(pos1.x, pos1.y);
      ctx.arc(
        piece.position.x, piece.position.y,
        this.config.innerRadius,
        th1, th2,
      );
      ctx.fillStyle = getProfile(profiles, c, undefined)?.colour || 'white';
      ctx.fill();
    });
  }
}
