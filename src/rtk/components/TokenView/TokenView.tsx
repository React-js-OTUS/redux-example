import React from 'react';
import cn from 'clsx';
import { useSelector } from 'react-redux';
import { tokenSelectors } from 'src/rtk/store/token';
import s from './TokenView.sass';

export type TokenViewProps = {
  className?: string;
};

export const TokenView = ({ className }: TokenViewProps) => {
  console.log('render: TokenView');
  const token = useSelector(tokenSelectors.get);
  return (
    <div className={cn(s.root, className)}>
      <div>TokenView</div>
      {token}
    </div>
  );
};
