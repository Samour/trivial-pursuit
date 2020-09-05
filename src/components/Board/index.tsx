import React, { useEffect, createRef, RefObject } from 'react';
import { boardConfiguration, boardBase } from 'config/board';
import { IDrawBoard } from 'services/draw/DrawBoard';
import drawBoardProvider from 'services/drawBoardProvider';

const drawBoard: IDrawBoard = drawBoardProvider();

export default function Board(): JSX.Element {
  const canvasRef: RefObject<HTMLCanvasElement> = createRef();

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      drawBoard.draw(ctx, boardBase);
    }
  });

  return (
    <canvas id="board" ref={canvasRef}
      width={boardConfiguration.boardSize.width}
      height={boardConfiguration.boardSize.height} />
  );
}
