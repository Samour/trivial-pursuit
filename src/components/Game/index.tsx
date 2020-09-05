import React from 'react';
import { Provider } from 'react-redux';
import Controls from 'components/Controls';
import Board from 'components/Board';
import NewGameModal from 'components/NewGameModal';
import { store } from 'store';

export default function Game(): JSX.Element {
  return (
    <Provider store={store}>
      <div>
        <Controls />
        <Board />
        <NewGameModal />
      </div>
    </Provider>
  );
}
