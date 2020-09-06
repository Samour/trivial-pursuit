import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import SelectableRoundel from 'components/SelectableRoundel';
import { Player, Category } from 'models/IBoard';
import { IState } from 'state/IState';
import { assignPlayerCategoryEvent } from 'events/AssignPlayerCategoryEvent';
import { getProfile } from 'utils/profileUtils';
import { winnableCategories, boardBase } from 'config/board';

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

interface IActions {
  assignCategory: (player: Player, category: Category, hasCategory: boolean) => void;
}

const mapActions = (dispatch: Dispatch): IActions => ({
  assignCategory: (p, c, has) => dispatch(assignPlayerCategoryEvent(p, c, has)),
});

function Categories({ player, hasCategory, assignCategory }: ILocalState & IActions): JSX.Element | null {
  if (!player) {
    return null;
  }

  const categories = winnableCategories.map((c) => (
    <SelectableRoundel colour={getProfile(boardBase.profiles, c, undefined)?.colour || 'white'}
      checked={hasCategory(c)}
      onChange={(ch) => assignCategory(player, c, ch)} />
  ));

  return (
    <div className="selectable-roundel-row">
      {categories}
    </div>
  );
}

export default connect(mapState, mapActions)(Categories);
