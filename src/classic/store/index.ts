import { createStore, combineReducers } from 'redux';
import { items } from './items';
import { count } from './count';

const rootReducer = combineReducers({
  items,
  count,
});

export const classicStore = createStore(rootReducer);

export type ClassicState = ReturnType<typeof classicStore.getState>;
export type ClassicDispatch = typeof classicStore.dispatch;
