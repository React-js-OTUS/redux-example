import React from 'react';
import cn from 'clsx';
import { connect } from 'react-redux';
import { RtkState } from 'src/rtk/store';
import { compose } from '@reduxjs/toolkit';
import s from './CombineViewConnect.sass';

export type CombineViewProps = {
  className?: string;
  token: string;
  count: number;
  variant: number;
};

export const CombineViewConnectOrigin = ({ className, token, count, variant }: CombineViewProps) => {
  console.log(`render: CombineViewConnectOrigin ${variant}`);

  return (
    <div className={cn(s.root, className)}>
      <div>CombineViewConnectOrigin {variant}</div>
      <div>token</div>
      <div>{token}</div>
      <div>count</div>
      <div>{count}</div>
    </div>
  );
};

export const CombineViewConnectVariant1 = connect((state: RtkState) => ({
  count: state.count,
  token: state.token,
  variant: 1,
}))(CombineViewConnectOrigin);

const connectToken = connect((state: RtkState) => ({
  token: state.token,
}));
const connectCount = connect((state: RtkState) => ({
  count: state.count,
}));
const connectVariant = connect(null, null, () => ({ variant: 2 }));

const composed = compose(connectVariant, connectCount, connectToken);
export const CombineViewConnectVariant2 = composed(CombineViewConnectOrigin);
