import React from 'react';
import cn from 'clsx';
import { useSelector } from 'react-redux';
import { countSelectors } from 'src/rtk/store/count';
import s from './CountListenerUseSelector.sass';

export type CountListenerUseSelectorProps = {
  className?: string;
};

export const CountListenerUseSelector = ({ className }: CountListenerUseSelectorProps) => {
  const count = useSelector(countSelectors.get);
  console.log('render: CountListenerUseSelector');
  return (
    <div className={cn(s.root, className)}>
      <div>CountListenerUseSelector</div>
      {count}
    </div>
  );
};
