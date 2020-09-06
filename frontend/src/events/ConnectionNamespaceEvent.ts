import { EventType } from 'events/IEvent';

export interface IConnectionNamespaceEvent {
  type: EventType.CONNECTION_NAMESPACE;
  namespace: string;
}

export const connectionNamespaceEvent = (namespace: string): IConnectionNamespaceEvent => ({
  type: EventType.CONNECTION_NAMESPACE,
  namespace,
});
