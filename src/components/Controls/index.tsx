import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { openNewGameModalEvent } from 'events/OpenNewGameModalEvent';

interface IActions {
  openNewGameModal: () => void;
}

const mapActions = (dispatch: Dispatch): IActions => ({
  openNewGameModal: () => dispatch(openNewGameModalEvent()),
});

function Controls({ openNewGameModal }: IActions): JSX.Element {
  return (
    <div className="controls main-controls">
      <button onClick={openNewGameModal}>New Game</button>
    </div>
  );
}

export default connect(null, mapActions)(Controls);