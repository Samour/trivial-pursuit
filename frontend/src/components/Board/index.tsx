import React, { useEffect, createRef, RefObject } from 'react';
import { connect } from 'react-redux';
import { IGame } from 'models/IGame';
import { IState } from 'state/IState';
import { boardConfiguration, boardBase } from 'config/board';
import { IDrawBoard } from 'services/draw/DrawBoard';
import drawBoardProvider from 'services/drawBoardProvider';
import { playerClickHandlerService } from 'services/PlayerEventHandlerService';

const drawBoard: IDrawBoard = drawBoardProvider();

interface ILocalState {
  game: IGame;
}

const mapState = (state: IState): ILocalState => ({
  game: state.game,
});

function Board({ game }: ILocalState): JSX.Element {
  const canvasRef: RefObject<HTMLCanvasElement> = createRef();

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) {
      drawBoard.draw(ctx, boardBase, game);
    }
  }, [canvasRef, game]);

  const onClick = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => canvasRef.current &&
    playerClickHandlerService.handleMouseDownEvent(canvasRef.current, e.clientX, e.clientY);
  const onMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => canvasRef.current &&
    playerClickHandlerService.handleMouseMoveEvent(canvasRef.current, e.clientX, e.clientY);

  return (
    <canvas id="board" ref={canvasRef}
      width={boardConfiguration.boardSize.width}
      height={boardConfiguration.boardSize.height}
      onMouseDown={onClick}
      onMouseUp={() => playerClickHandlerService.handleMouseUpEvent()}
      onMouseMove={onMouseMove} />
  );
}

export default connect(mapState)(Board);
