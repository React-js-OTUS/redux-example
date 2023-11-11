import { createStore, combineReducers } from 'redux';
import items from './items';

const rootReducer = combineReducers({
  items,
});

export const classicStore = createStore(rootReducer);

export type ClassicState = ReturnType<typeof classicStore.getState>;
export type ClassicDispatch = typeof classicStore.dispatch;
