import React from 'react';
import cn from 'clsx';
import { useDispatch } from 'react-redux';
import { countActions } from 'src/rtk/store/count';
import s from './CountEditorUseDispatch.sass';

export type CountEditorUseDispatchProps = {
  className?: string;
};

export const CountEditorUseDispatch = ({ className }: CountEditorUseDispatchProps) => {
  console.log('render: CountEditorUseDispatch');

  const dispatch = useDispatch();

  const increase = () => dispatch(countActions.increase({ amount: 1 }));
  const decrease = () => dispatch(countActions.decrease({ amount: 1 }));
  const set = () => dispatch(countActions.set({ value: 0 }));
  return (
    <div className={cn(s.root, className)}>
      <div>CountEditorUseDispatch</div>
      <button type="button" onClick={decrease}>
        -
      </button>
      <button type="button" onClick={set}>
        установить 0
      </button>
      <button type="button" onClick={increase}>
        +
      </button>
    </div>
  );
};
