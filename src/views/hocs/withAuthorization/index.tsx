import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { firebase } from '../../../domain/services/firebase';
import * as RoutesConstants from '../../../constants/routes';

interface Props {
  authUser: any;
  loggedIn: any;
  history: any;
}

const withAuthorization = (authCondition: any) => <P extends object>(
  Component: React.ComponentType<any>,
) => {
  class WithAuthorization extends React.Component<Props & RouteComponentProps<any>> {
    componentDidMount() {
      const { history } = this.props;
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          history.push(RoutesConstants.LANDING);
        } else {
          history.push(RoutesConstants.PROFILE);
        }
      });
    }

    render() {
      const { loggedIn, history } = this.props;
      if (history.location.pathname === '/') {
        return <Component />;
      }
      return loggedIn ? <Component /> : null;
    }
  }

  const mapStateToProps = (state: any) => ({
    loggedIn: state.onboarding.loggedIn,
  });

  return compose<any, any>(withRouter, connect(mapStateToProps))(WithAuthorization);
};

export default withAuthorization;
