import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AuthUserContext from './AuthUserContext';
import { firebase } from '../../../../services/firebase';
import * as sessionActions from '../../../../actions/session/session';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
    }

    componentDidMount() {
      const {
        onSetAuthUser,
      } = this.props;
      firebase.auth.onAuthStateChanged((authUser) => {
        if (authUser) {
          onSetAuthUser(authUser);
        } else {
          onSetAuthUser(null);
        }
      });
    }

    render() {
      const { authUser } = this.state;
      return (
        <AuthUserContext.Provider value={authUser}>
          <Component />
        </AuthUserContext.Provider>
      );
    }
  }

  WithAuthentication.propTypes = {
    onSetAuthUser: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch(sessionActions.fetchUserDetails(authUser)),
  });

  return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;
