import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import PlayerPiece from 'components/PlayerPiece';
import { openNewGameModalEvent } from 'events/OpenNewGameModalEvent';

interface IActions {
  openNewGameModal: () => void;
}

const mapActions = (dispatch: Dispatch): IActions => ({
  openNewGameModal: () => dispatch(openNewGameModalEvent()),
});

function Controls({ openNewGameModal }: IActions): JSX.Element {
  return (
    <div className="main-controls">
      <div className="controls">
        <button onClick={openNewGameModal}>New Game</button>
      </div>
      <PlayerPiece />
    </div>
  );
}

export default connect(null, mapActions)(Controls);
