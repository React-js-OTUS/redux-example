import { createSlice } from '@reduxjs/toolkit';
import { RtkState } from 'src/rtk/store/index';

const tokenSlice = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    gen: () => Math.random().toString(16),
    same: (state) => state,
  },
});
export const tokenActions = tokenSlice.actions;

export const tokenSelectors = {
  get: (state: RtkState): RtkState['token'] => {
    console.log('tokenSelectors get');

    return state.token;
  },
};

export const token = tokenSlice.reducer;
