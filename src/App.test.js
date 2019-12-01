import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import App from './App';
import axiosMock from 'axios'

afterEach(cleanup)

function renderWithRedux(
  component,
  { initialState, store = createStore(rootReducer, initialState, applyMiddleware(thunk)) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  }
}

test('has heading text of "Earthquakes"', async () => {
  const { getByText } = renderWithRedux(<App />);
  expect(getByText('Earthquakes')).toBeInTheDocument();
});

it('has "earthquakes-app" test id', () => {
  const { getByTestId } = renderWithRedux(<App />);
  expect(getByTestId('earthquakes-app')).toBeInTheDocument();
});
