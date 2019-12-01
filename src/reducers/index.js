import { combineReducers } from 'redux';
import earthquakeReducer from './earthquakeRedcuers';

export default combineReducers({
  store: earthquakeReducer
})