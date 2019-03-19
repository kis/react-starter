import LandingPage from '@components/account/Home/LandingPage';
import { AuthProps } from '@typings/auth';
import { State } from '@typings/state';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as onboardingActions from 'actions/onboarding/onboarding';
import { Route } from 'react-router-dom';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import withLoader from '../../hocs/withLoader';

const LandingContainer = (props: AuthProps & RouteComponentProps<any>) => {
  const LandingPageEnhanced = withLoader(LandingPage);

  return (
    <Route path="/home" render={() => <LandingPageEnhanced {...props} />} />
  );
};

const mapStateToProps = (state: State) => ({
  onboarding: state.onboarding,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: bindActionCreators({ ...onboardingActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(LandingContainer),
);
