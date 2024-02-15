import { createSlice } from '@reduxjs/toolkit';
import { RtkState } from 'src/rtk/store/index';
import { countActions } from '../store/count';

const tokenSlice = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    gen: () => Math.random().toString(16),
    same: (state) => state,
  },
  extraReducers: (builder) => {
    builder.addCase(countActions.increase, (state, action) => {
      console.log('extraReducers: ', action, state);

      return Math.random().toString(16);
    });

    builder.addCase('count/decrease', (state, action) => {
      console.log('extraReducers: ', action, state);

      return state;
    });
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