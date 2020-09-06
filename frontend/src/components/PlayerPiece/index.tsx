import React, { useEffect, createRef, RefObject } from 'react';
import { connect } from 'react-redux';
import Categories from './Categories';
import { IPlayerPiece } from 'models/IGame';
import { IState } from 'state/IState';
import drawPlayerPieceDetailProvider from 'services/drawPlayerPieceDetailProvider';
import { playerPieceDisplayConfig } from 'config/playerPieceDisplay';

const drawPlayerPiece = drawPlayerPieceDetailProvider();

interface ILocalState {
  player: IPlayerPiece | null;
}

const mapState = (state: IState): ILocalState => ({
  player: state.game.playerPieces.find((p) => p.player === state.viewPiece.player) || null,
});

function PlayerPiece({ player }: ILocalState): JSX.Element | null {
  const canvasRef: RefObject<HTMLCanvasElement> = createRef();

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx && player) {
      drawPlayerPiece.draw(ctx, player);
    }
  }, [canvasRef, player]);

  return (
    <div className="player-piece-container">
      <canvas id="playerPiece" ref={canvasRef}
        width={playerPieceDisplayConfig.width}
        height={playerPieceDisplayConfig.height} />
      <Categories />
    </div>
  );
}

export default connect(mapState)(PlayerPiece);
