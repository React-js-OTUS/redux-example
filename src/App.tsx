import React from 'react';
import { Provider } from 'react-redux';
import { rtkStore } from 'src/rtk/store';
import { ItemsView as ItemsViewRtk } from 'src/rtk/components/ItemsView';
import { classicStore } from 'src/classic/store';
import { ItemsView as ItemsViewClassic } from 'src/classic/components/ItemsView';
import s from './App.sass';

function App() {
  return (
    <div className={s.root}>
      <h1>Пример redux приложения</h1>
      <Provider store={classicStore}>
        <h2>Классический redux</h2>
        <ItemsViewClassic />
      </Provider>
      <Provider store={rtkStore}>
        <h2>Redux-toolkit</h2>
        <ItemsViewRtk />
      </Provider>
    </div>
  );
}

export default App;
