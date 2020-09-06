import { IPlayerPiece } from 'models/IGame';
import { IPlayerPieceDisplayConfiguration, IBoard } from 'models/IBoard';
import { IDrawPlayerPiece } from './DrawPlayerPiece';

export interface IDrawPlayerPieceDetail {
  draw(ctx: CanvasRenderingContext2D, piece: IPlayerPiece | null): void;
}

export class DrawPlayerPieceDetail implements IDrawPlayerPieceDetail {

  constructor(private readonly drawPlayerPiece: IDrawPlayerPiece,
    private readonly playerPieceDetailConfiguration: IPlayerPieceDisplayConfiguration,
    private readonly board: IBoard) { }

  draw(ctx: CanvasRenderingContext2D, piece: IPlayerPiece | null): void {
    ctx.clearRect(0, 0, this.playerPieceDetailConfiguration.width, this.playerPieceDetailConfiguration.height);

    if (!piece) {
      return;
    }

    this.drawPlayerPiece.draw(
      ctx,
      {
        ...piece,
        position: {
          x: this.playerPieceDetailConfiguration.width / 2,
          y: this.playerPieceDetailConfiguration.height / 2,
        },
      },
      this.board.profiles,
    );
  }
}
