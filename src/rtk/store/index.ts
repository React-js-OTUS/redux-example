import { configureStore } from '@reduxjs/toolkit';
import { count } from 'src/rtk/store/count';
import { token } from 'src/rtk/store/token';
import { items } from './items';

export const rtkStore = configureStore({
  reducer: {
    items,
    count,
    token,
  },
});

export type RtkState = ReturnType<typeof rtkStore.getState>;
export type RtkDispatch = typeof rtkStore.dispatch;
