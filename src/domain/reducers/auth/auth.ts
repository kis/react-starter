const initConfig = {
  logged: false,
  user: null,
  errors: null,
  token: null,
};

export default function login(state = initConfig, action: any) {
  switch (action.type) {
    case 'INIT_AUTH':
      return { ...state, user: null, errors: null };

    case 'LOGIN':
      return {
        ...state,
        logged: action.logged,
        user: action.user,
        errors: null,
        token: action.token,
      };

    case 'SET_ERRORS':
      return { ...state, errors: action.errors, logged: false, user: null };

    case 'REGISTER':
      return { ...state, user: action.user, logged: false, errors: null };

    case 'LOGOUT':
      return { ...state, logged: false, user: null, token: null, errors: null };

    default:
      return state;
  }
}
