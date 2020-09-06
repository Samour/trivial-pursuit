import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SelectableRoundel from 'components/SelectableRoundel';
import { Player } from 'models/IBoard';
import { IState } from 'state/IState';
import { boardBase } from 'config/board';
import { newGameSelectPlayerEvent } from 'events/NewGameSelectPlayerEvent';

interface DisplayPlayer {
  player: Player;
  colour: string;
}

const players: DisplayPlayer[] = boardBase.profiles.filter(({ home }) => !!home)
  .map((p) => ({
    player: p.home as Player,
    colour: p.colour,
  }));

interface IProps {
  player: Player;
}

interface ILocalState {
  selectedPlayers: Player[];
}

const mapState = (state: IState): ILocalState => ({
  selectedPlayers: state.newGameModal.selectedPlayers,
});

interface IActions {
  selectPlayer: (player: Player, selected: boolean) => void;
}

const mapActions = (dispatch: Dispatch): IActions => ({
  selectPlayer: (player, selected) => dispatch(newGameSelectPlayerEvent(player, selected)),
});

function PlayerSelect({ player, selectedPlayers, selectPlayer }: IProps & ILocalState & IActions): JSX.Element {
  const selected = !!selectedPlayers.find(p => p === player);

  const colour = players.find((p) => p.player === player)?.colour || 'white';
  return (
    <SelectableRoundel colour={colour} checked={selected} onChange={(c) => selectPlayer(player, c)} />
  );
}

export default connect(mapState, mapActions)(PlayerSelect);
