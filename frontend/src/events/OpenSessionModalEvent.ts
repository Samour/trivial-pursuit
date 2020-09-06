import { EventType } from 'events/IEvent';

export interface IOpenSessionModalEvent {
  type: EventType.OPEN_SESSION_MODAL;
}

export const openSessionModalEvent = (): IOpenSessionModalEvent => ({
  type: EventType.OPEN_SESSION_MODAL,
});
