import React from 'react';
import { render } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

import { Provider } from 'react-redux';
import Earthquake from './Earthquake';

function renderWithRedux(
  component,
  { initialState, store = createStore(rootReducer, initialState, applyMiddleware(thunk)) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
}

test('should have test id', () => {
  const { getByTestId } = renderWithRedux(<Earthquake />)
  expect(getByTestId('earthquake-item')).toBeTruthy()
})

test('should present data props 1', () => {
  const { getByTestId } = renderWithRedux(<Earthquake key='1' id='2' place='place' mag='mag'magType='magType' />)
  const earthQuakeItem = getByTestId('earthquake-item')
  expect(earthQuakeItem.innerHTML).toEqual('<p>2 : place : mag : magType</p>')
})

test('should present data props 2', () => {
  const { getByTestId } = renderWithRedux(<Earthquake key='1' id='15' place='some place' mag='0.4'magType='md' />)
  const earthQuakeItem = getByTestId('earthquake-item')
  expect(earthQuakeItem.innerHTML).toEqual('<p>15 : some place : 0.4 : md</p>')
})

test('should not present data props 3', () => {
  const { getByTestId } = renderWithRedux(<Earthquake key='1' id='15' place='some place' mag='0.4'magType='md' />)
  const earthQuakeItem = getByTestId('earthquake-item')
  expect(earthQuakeItem.innerHTML).not.toEqual('<p>12 : some place 123 : 0.422 : mdw</p>')
})