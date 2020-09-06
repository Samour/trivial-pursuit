import { createStore, Store } from 'redux';
import { IState } from 'state/IState';
import reducer from 'reducers';

export const store: Store<IState> = createStore(reducer);
