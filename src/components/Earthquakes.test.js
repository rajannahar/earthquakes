import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { Provider } from 'react-redux';
import App from '../App'
import axiosMock from 'axios'

afterEach(cleanup)

const initialState = {};

function renderWithRedux(
  component,
  { store = createStore(rootReducer, initialState, applyMiddleware(thunk)) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  }
}

test('should have test id for loading', async () => {

  const mockAPI = axiosMock.get.mockResolvedValue({
    store: {
      data: {
        features: [
          {
            "properties": {
              "mag": 1.29,
              "place": "10km SSW of Idyllwild, CA",
              "magType": "ml",
            },
            "id": "ci11408890"
          }
        ]
      },
      loading: false
    }
  })

  const loadingResult = await mockAPI().then(result => {
    return result.store.loading
  })

  const { getByTestId } = renderWithRedux(<App />);
  const earthquakesList = await waitForElement(() => getByTestId('earthquakes-loading'))
  if (loadingResult === false) {
    expect(earthquakesList.innerHTML).toEqual('Loading...')
  }

})

