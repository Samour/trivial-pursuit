import React from 'react';
import { connect } from 'react-redux';
import SelectableRoundel from 'components/SelectableRoundel';
import { Player, Category } from 'models/IBoard';
import { IState } from 'state/IState';
import { getProfile } from 'utils/profileUtils';
import { winnableCategories, boardBase } from 'config/board';
import { gameManagerService } from 'services/GameManagerService';

interface ILocalState {
  player: Player | null;
  hasCategory: (category: Category) => boolean;
}

const mapState = (state: IState): ILocalState => ({
  player: state.viewPiece.player,
  hasCategory: (c) => !!(state.game.playerPieces.find((p) => p.player === state.viewPiece.player)
    ?.categories || [])
    .find((cat) => cat === c),
});

function Categories({ player, hasCategory }: ILocalState): JSX.Element | null {
  if (!player) {
    return null;
  }

  const categories = winnableCategories.map((c) => (
    <SelectableRoundel colour={getProfile(boardBase.profiles, c, undefined)?.colour || 'white'}
      checked={hasCategory(c)}
      onChange={(ch) => gameManagerService.assignPlayerCategory(player, c, ch)} />
  ));

  return (
    <div className="selectable-roundel-row">
      {categories}
    </div>
  );
}

export default connect(mapState)(Categories);
