import { EventType } from 'events/IEvent';

export interface IEditConnectionNamespaceEvent {
  type: EventType.EDIT_CONNECTION_NAMESPACE;
  edit: boolean;
}

export const editConnectionNamespaceEvent = (edit: boolean): IEditConnectionNamespaceEvent => ({
  type: EventType.EDIT_CONNECTION_NAMESPACE,
  edit,
});
