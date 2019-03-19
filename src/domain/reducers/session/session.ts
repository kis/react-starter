import * as sessionActions from '../../actions/session/types';

const INITIAL_STATE = {
  authUser: null,
  userInfo: null,
  isGettingUser: false,
};

const session = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case sessionActions.AUTH_USER_SET: {
      return (state: any, action: any) => ({
        ...state,
        authUser: action.authUser,
      });
    }
    case sessionActions.SET_USER_INFO: {
      return (state: any, action: any) => ({
        ...state,
        userInfo: action.userInfo,
      });
    }
    case sessionActions.IS_GETTING_USER: {
      return (state: any, { isGettingUser }: any) => ({
        ...state,
        isGettingUser,
      });
    }
    default: return state;
  }
};

export default session;
