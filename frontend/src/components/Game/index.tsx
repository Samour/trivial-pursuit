import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Controls from 'components/Controls';
import Board from 'components/Board';
import NewGameModal from 'components/NewGameModal';
import SessionModal from 'components/SessionModal';
import { store } from 'store';
import { communicationService } from 'services/CommunicationService';

export default function Game(): JSX.Element {
  useEffect(() => {
    communicationService.connect();

    return () => communicationService.disconnect();
  });

  return (
    <Provider store={store}>
      <div className="game-container">
        <Controls />
        <Board />
        <NewGameModal />
        <SessionModal />
      </div>
    </Provider>
  );
}
