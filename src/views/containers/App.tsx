import React from 'react';
import { hot } from 'react-hot-loader';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from 'store/history';
import store from 'store/store';

import Loader from '../components/shared/Loader/Loader';
import NavigationContainer from './Nav/NavigationContainer';
import PacksContainer from './Packs/PacksContainer';

const ErrorBoundary = Loadable({
  loader: () =>
    import(/* webpackChunkName: "errorboundary" */
    '@components/shared/ErrorBoundary/ErrorBoundary'),
  loading: Loader,
});

const LandingContainer = Loadable({
  loader: () =>
    import(/* webpackChunkName: "landing" */
    './Landing/LandingContainer'),
  loading: Loader,
});

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <ErrorBoundary>
        <NavigationContainer />
        <Switch>
          <Route exact={true} path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={LandingContainer} />
          <Route path="/packs" component={PacksContainer} />
        </Switch>
      </ErrorBoundary>
    </Router>
  </Provider>
);

export default hot(module)(App);
