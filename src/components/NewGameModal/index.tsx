import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Modal from 'components/shared/Modal';
import PlayerSelect from './PlayerSelect';
import { Player } from 'models/IBoard';
import { IState } from 'state/IState';
import { closeNewGameModalEvent } from 'events/CloseNewGameModalEvent';

const players: Player[] = [
  'green',
  'purple',
  'blue',
  'orange',
  'yellow',
  'pink',
];

interface ILocalState {
  open: boolean;
}

const mapState = (state: IState): ILocalState => ({
  open: state.newGameModal.open,
});

interface IActions {
  closeModal: () => void;
}

const mapActions = (dispatch: Dispatch): IActions => ({
  closeModal: () => dispatch(closeNewGameModalEvent()),
});

function NewGameModal({ open, closeModal }: ILocalState & IActions): JSX.Element {
  const playerEls = players.map((p) => <PlayerSelect key={p} player={p} />);

  return (
    <Modal open={open} title='New Game'>
      <div className="new-game-modal">
        <div className="select-players">
          {playerEls}
        </div>
        <div className="controls">
          <button onClick={closeModal}>Cancel</button>
          <button>Start Game</button>
        </div>
      </div>
    </Modal>
  );
}

export default connect(mapState, mapActions)(NewGameModal);
