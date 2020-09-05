import { IBoard } from 'models/IBoard';
import { IDrawOuterTrack } from 'services/draw/DrawOuterTrack';
import { IDrawInnerTrack } from './DrawInnerTrack';

export interface IDrawBoard {
  draw(ctx: CanvasRenderingContext2D, board: IBoard): void;
}

export class DrawBoard implements IDrawBoard {

  constructor(private readonly drawOuterTrack: IDrawOuterTrack, private readonly drawInnerTrack: IDrawInnerTrack) { }

  draw(ctx: CanvasRenderingContext2D, board: IBoard): void {
    this.drawOuterTrack.draw(ctx, board);
    board.innerTracks.forEach((t) => this.drawInnerTrack.draw(ctx, t, board.profiles));
  }

}
