import { reducer as notifications } from 'react-notification-system-redux';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import loader from '../reducers/loader/loader';
import onboarding from '../reducers/onboarding/onboarding';

import history from './history';

import rootSaga from '../sagas/root';

let middleware;
const sagaMiddleware = createSagaMiddleware();
middleware = [sagaMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger');
  const loggerMiddleware = logger.createLogger();
  middleware = [sagaMiddleware, loggerMiddleware, routerMiddleware(history)];
}

const reducer = combineReducers({
  onboarding,
  loader,
  notifications,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

/* eslint-disable no-underscore-dangle */
const store: any = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);
/* eslint-enable */

sagaMiddleware.run(rootSaga);

export default store;
