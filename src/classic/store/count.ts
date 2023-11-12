import { ClassicState } from 'src/classic/store/index';

const INCREASE = 'count/increase';
const DECREASE = 'count/decrease';
const SET = 'count/set';

type CountAction = IncreaseAction | DecreaseAction | SetAction;

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

export const countActions = {
  decrease: (payload: DecreaseAction['payload']): DecreaseAction => ({ type: DECREASE, payload }),
  set: (payload: SetAction['payload']): SetAction => ({ type: SET, payload }),
  increase: (payload: IncreaseAction['payload']): IncreaseAction => ({ type: INCREASE, payload }),
};

export const countSelectors = {
  get: (state: ClassicState) => state.count,
};

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
