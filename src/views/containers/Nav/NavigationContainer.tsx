import NavigationComponent from '@components/account/Nav/Nav';
import { State } from '@typings/state';
import * as ontourActions from 'actions/ontour/ontour';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

const NavigationContainer = () => {
  return <NavigationComponent />;
};

const mapStateToProps = (state: State) => ({
  notifications: state.notifications,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  actions: bindActionCreators(
    {
      ...ontourActions,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
