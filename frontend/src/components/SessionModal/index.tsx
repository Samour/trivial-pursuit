import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Modal from 'components/shared/Modal';
import { IState } from 'state/IState';
import { closeSessionModalEvent } from 'events/CloseSessionModalEvent';
import { communicationService } from 'services/CommunicationService';
import { editConnectionNamespaceEvent } from 'events/EditConnectionNamespaceEvent';
import { connectionNamespaceEvent } from 'events/ConnectionNamespaceEvent';

interface ILocalState {
  open: boolean;
  edit: boolean;
  namespace: string;
}

const mapState = (state: IState): ILocalState => ({
  open: state.sessionModal.open,
  edit: state.sessionModal.edit,
  namespace: state.sessionModal.namespace,
});

interface IActions {
  editNamespace: (edit: boolean) => void;
  setNamespace: (namespace: string) => void;
  closeModal: () => void;
}

const mapActions = (dispatch: Dispatch): IActions => ({
  editNamespace: (edit: boolean) => dispatch(editConnectionNamespaceEvent(edit)),
  setNamespace: (ns) => dispatch(connectionNamespaceEvent(ns)),
  closeModal: () => dispatch(closeSessionModalEvent()),
});

function SessionModal({
  open,
  edit,
  namespace,
  editNamespace,
  setNamespace,
  closeModal,
}: ILocalState & IActions): JSX.Element {
  const namespaceValue = (): JSX.Element => {
    if (edit) {
      return <input value={namespace} onChange={(e) => setNamespace(e.target.value)} />;
    } else {
      return <pre>{namespace}</pre>;
    }
  };

  const onEditCancel = () => {
    editNamespace(false);
    setNamespace(communicationService.getNamespace());
  };

  const onJoinSession = () => {
    editNamespace(false);
    communicationService.connect(namespace);
  };

  const Controls = (): JSX.Element => {
    if (edit) {
      return (
        <>
          <button onClick={onEditCancel}>Cancel</button>
          <button onClick={onJoinSession}>Join Session</button>
        </>
      );
    } else {
      return (
        <>
          <button onClick={() => communicationService.connect()}>New Session</button>
          <button onClick={() => editNamespace(true)}>Join Existing Session</button>
          <button onClick={closeModal}>Close</button>
        </>
      );
    }
  };

  return (
    <Modal open={open} title="Game Session">
      <div className="game-session">
        <strong>Session ID:</strong>
        {namespaceValue()}
      </div>
      <div className="controls">
        <Controls />
      </div>
    </Modal>
  );
}

export default connect(mapState, mapActions)(SessionModal);
