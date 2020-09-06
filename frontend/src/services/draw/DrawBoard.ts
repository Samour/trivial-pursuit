import { IBoard, IBoardConfiguration } from 'models/IBoard';
import { IGame } from 'models/IGame';
import { IDrawOuterTrack } from 'services/draw/DrawOuterTrack';
import { IDrawInnerTrack } from './DrawInnerTrack';
import { IDrawPlayerPiece } from './DrawPlayerPiece';

export interface IDrawBoard {
  draw(ctx: CanvasRenderingContext2D, board: IBoard, game: IGame): void;
}

export class DrawBoard implements IDrawBoard {

  constructor(private readonly drawOuterTrack: IDrawOuterTrack, private readonly drawInnerTrack: IDrawInnerTrack,
    private readonly drawPlayerPiece: IDrawPlayerPiece, private readonly boardConfiguration: IBoardConfiguration) { }

  draw(ctx: CanvasRenderingContext2D, board: IBoard, game: IGame): void {
    ctx.clearRect(0, 0, this.boardConfiguration.boardSize.width, this.boardConfiguration.boardSize.height);
    this.drawOuterTrack.draw(ctx, board);
    board.innerTracks.forEach((t) => this.drawInnerTrack.draw(ctx, t, board.profiles));
    game.playerPieces.forEach((p) => this.drawPlayerPiece.draw(
      ctx,
      p,
      board.profiles,
    ));
  }

}
