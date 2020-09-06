import { EventType } from 'events/IEvent';

export interface ICloseSessionModalEvent {
  type: EventType.CLOSE_SESSION_MODAL,
}

export const closeSessionModalEvent = (): ICloseSessionModalEvent => ({
  type: EventType.CLOSE_SESSION_MODAL,
});
