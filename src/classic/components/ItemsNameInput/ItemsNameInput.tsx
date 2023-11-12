import React from 'react';
import cn from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { itemsActions, itemsSelectors } from 'src/classic/store/items';
import s from './ItemsNameInput.sass';

export type NameInputProps = {
  className?: string;
  parentIndex?: number;
  index: number;
};

export const ItemsNameInput = ({ className, parentIndex, index }: NameInputProps) => {
  const dispatch = useDispatch();
  const name = useSelector(
    parentIndex !== undefined ? itemsSelectors.getChildName(parentIndex, index) : itemsSelectors.getName(index)
  );
  return (
    <input
      value={name}
      className={cn(s.root, className)}
      onChange={(e) => {
        const { value } = e.target;
        const action =
          parentIndex !== undefined
            ? itemsActions.changeNameChild({ parentIndex, index, value })
            : itemsActions.changeName({ index, value });
        dispatch(action);
      }}
    />
  );
};
