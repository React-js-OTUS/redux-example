import React from 'react';
import cn from 'clsx';
import { connect } from 'react-redux';
import { tokenActions } from 'src/rtk/store/token';
import s from './TokenGenerator.sass';

export type TokenGeneratorProps = {
  className?: string;
  gen: () => void;
  same: () => void;
};

export const TokenGeneratorOrigin = ({ className, gen, same }: TokenGeneratorProps) => {
  console.log('render: TokenGeneratorOrigin');

  return (
    <div className={cn(s.root, className)}>
      <div>TokenGenerator</div>
      <button type="button" onClick={gen}>
        Генерировать фэйковый токен
      </button>
      <button type="button" onClick={same}>
        Установить тот же токен
      </button>
    </div>
  );
};

export const TokenGenerator = connect(null, (dispatch) => ({
  gen: () => dispatch(tokenActions.gen()),
  same: () => dispatch(tokenActions.same()),
}))(TokenGeneratorOrigin);
