import { createSlice } from '@reduxjs/toolkit';
import { Items } from 'src/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RtkState } from 'src/rtk/store/index';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [] as Items,
  reducers: {
    add: (state) => {
      state.push({ id: Math.random().toString(16), name: '', count: 0, children: [] });
    },
    addChild: (state, action: PayloadAction<{ index: number }>) => {
      state[action.payload.index].children.push({ id: Math.random().toString(16), name: '', count: 0 });
    },

    changeName: (state, action: PayloadAction<{ index: number; value: string }>) => {
      state[action.payload.index].name = action.payload.value;
    },
    increase: (state, action: PayloadAction<{ index: number; amount: number }>) => {
      state[action.payload.index].count += action.payload.amount;
    },
    decrease: (state, action: PayloadAction<{ index: number; amount: number }>) => {
      state[action.payload.index].count -= action.payload.amount;
    },

    changeNameChild: (state, action: PayloadAction<{ parentIndex: number; index: number; value: string }>) => {
      state[action.payload.parentIndex].children[action.payload.index].name = action.payload.value;
    },
    increaseChild: (state, action: PayloadAction<{ parentIndex: number; index: number; amount: number }>) => {
      state[action.payload.parentIndex].children[action.payload.index].count += action.payload.amount;
    },
    decreaseChild: (state, action: PayloadAction<{ parentIndex: number; index: number; amount: number }>) => {
      state[action.payload.parentIndex].children[action.payload.index].count -= action.payload.amount;
    },
  },
});
export const itemsActions = itemsSlice.actions;

export const itemsSelectors = {
  get: (state: RtkState): RtkState['items'] => state.items,
  getCount:
    (index: number) =>
    (state: RtkState): RtkState['items'][number]['count'] =>
      state.items[index].count,
  getName:
    (index: number) =>
    (state: RtkState): RtkState['items'][number]['name'] =>
      state.items[index].name,
  getChildCount:
    (parentIndex: number, index: number) =>
    (state: RtkState): RtkState['items'][number]['children'][number]['count'] =>
      state.items[parentIndex].children[index].count,
  getChildName:
    (parentIndex: number, index: number) =>
    (state: RtkState): RtkState['items'][number]['children'][number]['name'] =>
      state.items[parentIndex].children[index].name,
};

export const items = itemsSlice.reducer;
