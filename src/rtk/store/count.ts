import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RtkState } from 'src/rtk/store/index';

const countSlice = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    increase: (state, action: PayloadAction<{ amount: number }>) => state + action.payload.amount,
    decrease: (state, action: PayloadAction<{ amount: number }>) => state - action.payload.amount,
    set: (_, action: PayloadAction<{ value: number }>) => action.payload.value,
  },
});
export const countActions = countSlice.actions;

export const countSelectors = {
  get: (state: RtkState): RtkState['count'] => {
    console.log('countSelectors get');
    return state.count;
  },
};

export const count = countSlice.reducer;
