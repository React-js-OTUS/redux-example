import React from 'react';
import cn from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { itemsActions, itemsSelectors } from 'src/rtk/store/items';
import s from './ItemsCountEditor.sass';

export type CountEditorProps = {
  className?: string;
  parentIndex?: number;
  index: number;
};

export const ItemsCountEditor = ({ className, parentIndex, index }: CountEditorProps) => {
  const dispatch = useDispatch();
  const count = useSelector(
    parentIndex !== undefined ? itemsSelectors.getChildCount(parentIndex, index) : itemsSelectors.getCount(index)
  );

  const increment = () => {
    const action =
      parentIndex !== undefined
        ? itemsActions.increaseChild({ parentIndex, index, amount: 1 })
        : itemsActions.increase({ index, amount: 1 });
    dispatch(action);
  };

  const decrement = () => {
    const action =
      parentIndex !== undefined
        ? itemsActions.decreaseChild({ parentIndex, index, amount: 1 })
        : itemsActions.decrease({ index, amount: 1 });
    dispatch(action);
  };

  return (
    <div className={cn(s.root, className)}>
      <button type="button" onClick={decrement}>
        -
      </button>
      {count}
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  );
};
