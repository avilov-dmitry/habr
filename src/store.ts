import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { counterReducer, rootWatcherSaga } from './redux';

export const ROOT_REDUCER = combineReducers({
  counter: counterReducer
});

const storeEnhancers: any = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialiseSagaMiddleware = createSagaMiddleware();

export const store = createStore(
  ROOT_REDUCER,
  storeEnhancers(applyMiddleware(initialiseSagaMiddleware))
);

initialiseSagaMiddleware.run(rootWatcherSaga);
