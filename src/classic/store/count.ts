import { ClassicState } from 'src/classic/store/index';

// Actions
const INCREASE = 'count/increase';
const DECREASE = 'count/decrease';
const SET = 'count/set';

interface IncreaseAction {
  type: typeof INCREASE;
  payload: {
    amount: number;
  };
}

interface DecreaseAction {
  type: typeof DECREASE;
  payload: {
    amount: number;
  };
}

interface SetAction {
  type: typeof SET;
  payload: {
    value: number;
  };
}

export const countActions = {
  decrease: (payload: DecreaseAction['payload']): DecreaseAction => ({ type: DECREASE, payload }),
  set: (payload: SetAction['payload']): SetAction => ({ type: SET, payload }),
  increase: (payload: IncreaseAction['payload']): IncreaseAction => ({ type: INCREASE, payload }),
};

type CountAction = IncreaseAction | DecreaseAction | SetAction;

// Reducer
const initialState = 0;

export const count = (state = initialState, action: CountAction): number => {
  switch (action.type) {
    case INCREASE:
      return state + action.payload.amount;
    case DECREASE:
      return state - action.payload.amount;
    case SET:
      return action.payload.value;
    default:
      return state;
  }
};

// Selectors
export const getCount = (state: ClassicState) => state.count;
