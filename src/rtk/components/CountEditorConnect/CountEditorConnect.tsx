import React from 'react';
import cn from 'clsx';
import { connect } from 'react-redux';
import { countActions } from 'src/rtk/store/count';
import s from './CountEditorConnect.sass';

export type CountEditorUseDispatchProps = {
  className?: string;
  increase: () => void;
  set: (count: number) => void;
  decrease: () => void;
};

export const CountEditorConnectOrigin = ({ className, decrease, increase, set }: CountEditorUseDispatchProps) => {
  console.log('render: CountEditorConnectOrigin');

  return (
    <div className={cn(s.root, className)}>
      <div>CountEditorConnect</div>
      <button type="button" onClick={decrease}>
        -
      </button>
      <button type="button" onClick={() => set(0)}>
        установить 0
      </button>
      <button type="button" onClick={increase}>
        +
      </button>
    </div>
  );
};

export const CountEditorConnect = connect(null, (dispatch) => ({
  increase: () => dispatch(countActions.increase({ amount: 1 })),
  decrease: () => dispatch(countActions.decrease({ amount: 1 })),
  set: (count: number) => dispatch(countActions.set({ value: count })),
}))(CountEditorConnectOrigin);
