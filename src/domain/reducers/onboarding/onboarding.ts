const INITIAL_STATE = {
  email: '',
  password: '',
  onboardingLabel: {},
  loggedIn: false,
  signedUp: false,
  userData: null,
};

function onboardingReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'LOGIN_EMAIL_PW': {
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
    }
    case 'SENT_PW_EMAIL': {
      return {
        ...state,
        sentPWReset: action.sentPWReset,
      };
    }
    case 'UPDATE_LABEL': {
      return {
        ...state,
        onboardingLabel: action.onboardingLabel,
      };
    }
    case 'SIGNED_UP': {
      return {
        ...state,
        signedUp: action.signedUp,
      };
    }
    case 'LOGGED_IN': {
      return {
        ...state,
        loggedIn: action.loggedIn,
        userData: action.userData,
      };
    }
    default: return state;
  }
}

export default onboardingReducer;
