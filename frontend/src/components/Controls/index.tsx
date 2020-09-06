import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import PlayerPiece from 'components/PlayerPiece';
import { openNewGameModalEvent } from 'events/OpenNewGameModalEvent';
import { openSessionModalEvent } from 'events/OpenSessionModalEvent';

interface IActions {
  openNewGameModal: () => void;
  openSessionModal: () => void;
}

const mapActions = (dispatch: Dispatch): IActions => ({
  openNewGameModal: () => dispatch(openNewGameModalEvent()),
  openSessionModal: () => dispatch(openSessionModalEvent()),
});

function Controls({ openNewGameModal, openSessionModal }: IActions): JSX.Element {
  return (
    <div className="main-controls">
      <div className="controls">
        <button onClick={openNewGameModal}>New Game</button>
        <button onClick={openSessionModal}>Game Session</button>
      </div>
      <PlayerPiece />
    </div>
  );
}

export default connect(null, mapActions)(Controls);
