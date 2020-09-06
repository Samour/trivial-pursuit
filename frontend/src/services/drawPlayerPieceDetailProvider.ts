import { playerPieceDisplayConfig } from 'config/playerPieceDisplay';
import { boardBase } from 'config/board';
import { IDrawPlayerPieceDetail, DrawPlayerPieceDetail } from './draw/DrawPlayerPieceDetail';
import { DrawPlayerPiece } from './draw/DrawPlayerPiece';

export default function provider(): IDrawPlayerPieceDetail {
  return new DrawPlayerPieceDetail(
    new DrawPlayerPiece(playerPieceDisplayConfig),
    playerPieceDisplayConfig,
    boardBase,
  );
}
