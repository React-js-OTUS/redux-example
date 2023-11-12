import { ClassicState } from 'src/classic/store/index';
import { Items } from 'src/types';

const ADD_ITEM = 'items/ADD_ITEM';
const ADD_CHILD = 'items/ADD_CHILD';
const CHANGE_NAME = 'items/CHANGE_NAME';
const INCREASE = 'items/INCREASE';
const DECREASE = 'items/DECREASE';
const CHANGE_NAME_CHILD = 'items/CHANGE_NAME_CHILD';
const INCREASE_CHILD = 'items/INCREASE_CHILD';
const DECREASE_CHILD = 'items/DECREASE_CHILD';

interface AddItemAction {
  type: typeof ADD_ITEM;
}

interface AddChildAction {
  type: typeof ADD_CHILD;
  payload: {
    index: number;
  };
}

interface ChangeNameAction {
  type: typeof CHANGE_NAME;
  payload: {
    index: number;
    value: string;
  };
}

interface IncreaseAction {
  type: typeof INCREASE;
  payload: {
    index: number;
    amount: number;
  };
}

interface DecreaseAction {
  type: typeof DECREASE;
  payload: {
    index: number;
    amount: number;
  };
}

interface ChangeNameChildAction {
  type: typeof CHANGE_NAME_CHILD;
  payload: {
    parentIndex: number;
    index: number;
    value: string;
  };
}

interface IncreaseChildAction {
  type: typeof INCREASE_CHILD;
  payload: {
    parentIndex: number;
    index: number;
    amount: number;
  };
}

interface DecreaseChildAction {
  type: typeof DECREASE_CHILD;
  payload: {
    parentIndex: number;
    index: number;
    amount: number;
  };
}

type ItemsAction =
  | AddItemAction
  | AddChildAction
  | ChangeNameAction
  | IncreaseAction
  | DecreaseAction
  | ChangeNameChildAction
  | IncreaseChildAction
  | DecreaseChildAction;

const initialState: Items = [];

export const items = (state = initialState, action: ItemsAction): Items => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, { id: Math.random().toString(16), name: '', count: 0, children: [] }];

    case ADD_CHILD:
      return state.map((item, index) => {
        if (index === action.payload.index) {
          return {
            ...item,
            children: [...item.children, { id: Math.random().toString(16), name: '', count: 0 }],
          };
        }
        return item;
      });

    case CHANGE_NAME:
      return state.map((item, index) => {
        if (index === action.payload.index) {
          return {
            ...item,
            name: action.payload.value,
          };
        }
        return item;
      });

    case INCREASE:
      return state.map((item, index) => {
        if (index === action.payload.index) {
          return {
            ...item,
            count: item.count + action.payload.amount,
          };
        }
        return item;
      });

    case DECREASE:
      return state.map((item, index) => {
        if (index === action.payload.index) {
          return {
            ...item,
            count: item.count - action.payload.amount,
          };
        }
        return item;
      });

    case CHANGE_NAME_CHILD:
      return state.map((item, parentIndex) => {
        if (parentIndex === action.payload.parentIndex) {
          return {
            ...item,
            children: item.children.map((child, index) => {
              if (index === action.payload.index) {
                return {
                  ...child,
                  name: action.payload.value,
                };
              }
              return child;
            }),
          };
        }
        return item;
      });

    case INCREASE_CHILD:
      return state.map((item, parentIndex) => {
        if (parentIndex === action.payload.parentIndex) {
          return {
            ...item,
            children: item.children.map((child, index) => {
              if (index === action.payload.index) {
                return {
                  ...child,
                  count: child.count + action.payload.amount,
                };
              }
              return child;
            }),
          };
        }
        return item;
      });

    case DECREASE_CHILD:
      return state.map((item, parentIndex) => {
        if (parentIndex === action.payload.parentIndex) {
          return {
            ...item,
            children: item.children.map((child, index) => {
              if (index === action.payload.index) {
                return {
                  ...child,
                  count: child.count - action.payload.amount,
                };
              }
              return child;
            }),
          };
        }
        return item;
      });

    default:
      return state;
  }
};

export const itemsActions = {
  add: (): AddItemAction => ({ type: ADD_ITEM }),
  addChild: (payload: AddChildAction['payload']): AddChildAction => ({ type: ADD_CHILD, payload }),
  changeName: (payload: ChangeNameAction['payload']): ChangeNameAction => ({ type: CHANGE_NAME, payload }),
  increase: (payload: IncreaseAction['payload']): IncreaseAction => ({ type: INCREASE, payload }),
  decrease: (payload: DecreaseAction['payload']): DecreaseAction => ({ type: DECREASE, payload }),
  changeNameChild: (payload: ChangeNameChildAction['payload']): ChangeNameChildAction => ({
    type: CHANGE_NAME_CHILD,
    payload,
  }),
  increaseChild: (payload: IncreaseChildAction['payload']): IncreaseChildAction => ({ type: INCREASE_CHILD, payload }),
  decreaseChild: (payload: DecreaseChildAction['payload']): DecreaseChildAction => ({ type: DECREASE_CHILD, payload }),
};

export const itemsSelectors = {
  get: (state: ClassicState): ClassicState['items'] => state.items,
  getCount:
    (index: number) =>
    (state: ClassicState): ClassicState['items'][number]['count'] =>
      state.items[index].count,
  getName:
    (index: number) =>
    (state: ClassicState): ClassicState['items'][number]['name'] =>
      state.items[index].name,
  getChildCount:
    (parentIndex: number, index: number) =>
    (state: ClassicState): ClassicState['items'][number]['children'][number]['count'] =>
      state.items[parentIndex].children[index].count,
  getChildName:
    (parentIndex: number, index: number) =>
    (state: ClassicState): ClassicState['items'][number]['children'][number]['name'] =>
      state.items[parentIndex].children[index].name,
};
