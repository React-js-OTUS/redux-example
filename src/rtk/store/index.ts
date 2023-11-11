import { configureStore } from '@reduxjs/toolkit';
import { items } from './items';

export const rtkStore = configureStore({
  reducer: {
    items,
  },
});

export type RtkState = ReturnType<typeof rtkStore.getState>;
export type RtkDispatch = typeof rtkStore.dispatch;
