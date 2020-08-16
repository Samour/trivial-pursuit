import { IDrawBoard, DrawBoard } from 'services/draw/DrawBoard';
import { DrawOuterCell } from 'services/draw/DrawOuterCell';
import { boardConfiguration } from 'config/board';

export default function provider(): IDrawBoard {
  return new DrawBoard(new DrawOuterCell(boardConfiguration));
}
