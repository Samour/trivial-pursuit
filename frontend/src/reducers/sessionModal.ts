import { IEvent, EventType } from 'events/IEvent';
import { ISessionModal } from 'state/ISessionModal';
import { IConnectionNamespaceEvent } from 'events/ConnectionNamespaceEvent';
import { IEditConnectionNamespaceEvent } from 'events/EditConnectionNamespaceEvent';

const defaultState: ISessionModal = {
  open: false,
  edit: false,
  namespace: '',
};

export default function (state: ISessionModal | undefined, event: IEvent): ISessionModal {
  state = state || defaultState;
  if (event.type === EventType.OPEN_SESSION_MODAL) {
    return {
      ...state,
      open: true,
    };
  } else if (event.type === EventType.CLOSE_SESSION_MODAL) {
    return {
      ...state,
      open: false,
    };
  } else if (event.type === EventType.CONNECTION_NAMESPACE) {
    const { namespace } = event as IConnectionNamespaceEvent;
    return {
      ...state,
      namespace
    };
  } else if (event.type === EventType.EDIT_CONNECTION_NAMESPACE) {
    const { edit } = event as IEditConnectionNamespaceEvent;
    return {
      ...state,
      edit,
    };
  } else {
    return state;
  }
}
