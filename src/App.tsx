import React from 'react';
import { Provider } from 'react-redux';
import { rtkStore } from 'src/rtk/store';
import { ItemsView as ItemsViewRtk } from 'src/rtk/components/ItemsView';
import { classicStore } from 'src/classic/store';
import { ItemsView as ItemsViewClassic } from 'src/classic/components/ItemsView';
import { CountListenerUseSelector } from 'src/rtk/components/CountListenerUseSelector';
import { CountListenerConnect } from 'src/rtk/components/CountListenerConnect';
import { CountEditorConnect } from 'src/rtk/components/CountEditorConnect';
import { CountEditorUseDispatch } from 'src/rtk/components/CountEditorUseDispatch';
import { TokenGenerator } from 'src/rtk/components/TokenGenerator';
import { TokenView } from 'src/rtk/components/TokenView';
import {
  CombineViewConnectVariant1,
  CombineViewConnectVariant2,
} from 'src/rtk/components/CombineViewConnect/CombineViewConnect';
import {
  CombineViewUseSelector1,
  CombineViewUseSelector2,
  CombineViewUseSelector3,
} from 'src/rtk/components/CombineViewUseSelector';
import s from './App.sass';

function App() {
  return (
    <div className={s.root}>
      <h1>Пример redux приложения</h1>
      <Provider store={classicStore}>
        <h2>Классический redux</h2>
        <h3>items</h3>
        <ItemsViewClassic />
      </Provider>
      <hr />
      <hr />
      <hr />
      <Provider store={rtkStore}>
        <h2>Redux-toolkit</h2>
        <h3>items</h3>
        <ItemsViewRtk />
        <h3>count</h3>
        <CountListenerUseSelector />
        <CountListenerConnect />
        <CountEditorConnect />
        <CountEditorUseDispatch />
        <h3>token</h3>
        <TokenGenerator />
        <TokenView />
        <h3>combine</h3>
        <h4>compose</h4>
        <CombineViewConnectVariant1 />
        <CombineViewConnectVariant2 />
        <h4>use selector</h4>
        <CombineViewUseSelector1 />
        <CombineViewUseSelector2 />
        <CombineViewUseSelector3 />
      </Provider>
    </div>
  );
}

export default App;
