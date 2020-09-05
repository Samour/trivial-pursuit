import { IDrawBoard, DrawBoard } from 'services/draw/DrawBoard';
import { DrawOuterTrack } from 'services/draw/DrawOuterTrack';
import { DrawOuterCell } from 'services/draw/DrawOuterCell';
import { DrawInnerTrack } from 'services/draw/DrawInnerTrack';
import { DrawInnerCell } from 'services/draw/DrawInnerCell';
import { boardConfiguration } from 'config/board';

export default function provider(): IDrawBoard {
  return new DrawBoard(
    new DrawOuterTrack(boardConfiguration, new DrawOuterCell(boardConfiguration)),
    new DrawInnerTrack(boardConfiguration, new DrawInnerCell(boardConfiguration)),
  );
}
