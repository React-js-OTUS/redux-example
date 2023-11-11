import React from 'react';
import cn from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { itemsActions, itemsSelectors } from 'src/rtk/store/items';
import { NameInput } from 'src/rtk/components/NameInput';
import { CountEditor } from 'src/rtk/components/CountEditor';
import s from './ItemsView.sass';

export type ItemsViewProps = {
  className?: string;
};

export const ItemsView = ({ className }: ItemsViewProps) => {
  const dispatch = useDispatch();
  const items = useSelector(itemsSelectors.get);
  const add = () => dispatch(itemsActions.add());
  const addChild = (index: number) => dispatch(itemsActions.addChild({ index }));
  return (
    <div className={cn(s.root, className)}>
      <div>
        <button type="button" onClick={add}>
          +
        </button>
      </div>
      <div>Пункты</div>
      {items.map((item, i) => (
        <div className={s.item} key={item.id}>
          <div>{`Пункт №${i}`}</div>
          <NameInput index={i} />
          <CountEditor index={i} />
          <div>
            <button type="button" onClick={() => addChild(i)}>
              +
            </button>
            <div className={s.items}>
              {item.children.map((child, j) => (
                <div className={s.item} key={child.id}>
                  <div>{`Подпункт №${j}`}</div>
                  <NameInput index={j} parentIndex={i} />
                  <CountEditor index={j} parentIndex={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
