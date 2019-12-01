import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Earthquakes from './components/Earthquakes';
import Filter from './components/Filter';

function App() {
  return (
    <Provider store={store}>
      <div className="App" data-testid="earthquakes-app">
        <h1>Earthquakes</h1>
        <Filter label={'magType'} />
        <Filter label={'magnitude'} />
        <br />
        <Earthquakes />
      </div>
    </Provider>
  );
}

export default App;
