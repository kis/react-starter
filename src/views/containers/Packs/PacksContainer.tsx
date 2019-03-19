import PacksComponent from '@components/account/packs/PacksPage';
import { State } from '@typings/state';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as onboardingActions from 'actions/onboarding/onboarding';

const PacksContainer = () => {
  return <PacksComponent />
};

const mapStateToProps = (state: State) => ({
  onboarding: state.onboarding,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: bindActionCreators({ ...onboardingActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PacksContainer);
