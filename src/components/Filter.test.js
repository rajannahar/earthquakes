import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import { Provider } from 'react-redux';
import Filter from './Filter'

function renderWithRedux(
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
}

test('should have a form relating to data label', () => {
  const { getByTestId } = renderWithRedux(<Filter label={'magtype'} />)
  expect(getByTestId('form-magtype')).toBeTruthy()
})

test('should have a label relating to data label', () => {
  const { getByTestId } = renderWithRedux(<Filter label={'magtype'} />)
  expect(getByTestId('label-magtype')).toBeTruthy()
})

test('should have a input relating to data label', () => {
  const { getByTestId } = renderWithRedux(<Filter label={'magtype'} />)
  expect(getByTestId('input-magtype')).toBeTruthy()
})

test('should have a button relating to data label', () => {
  const { getByTestId } = renderWithRedux(<Filter label={'magtype'} />)
  expect(getByTestId('button-magtype')).toBeTruthy()
})


