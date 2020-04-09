import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from '../reducers/root_reducer';

export const configureStore = (preLoadedState={}) => {
  return createStore(RootReducer, preLoadedState, applyMiddleware(thunk, logger));
}