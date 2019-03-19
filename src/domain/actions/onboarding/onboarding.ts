import * as types from './types';

export function updateOnboardingLabel(onboardingLabel: any) {
  return {
    type: types.UPDATE_LABEL,
    onboardingLabel,
  };
}

export function signedUp(signedUp: any) {
  return {
    type: types.SIGNED_UP,
    signedUp,
  };
}

export function loggedIn(loggedIn: any, userData: any) {
  return {
    type: types.LOGGED_IN,
    loggedIn,
    userData,
  };
}

export function sentPasswordEmail() {
  return {
    type: types.SENT_PW_EMAIL,
    sentPWReset: true,
  };
}

export function requestUserLogout() {
  return {
    type: types.REQUEST_USER_LOGOUT,
  };
}

export function requestSaveEmail(email: any) {
  return {
    type: types.REQUEST_SAVE_EMAIL,
    email,
  };
}

export function requestCreateUser(user: any) {
  return {
    type: types.REQUEST_CREATE_USER,
    user,
  };
}

export function requestIsUserLogged() {
  return {
    type: types.REQUEST_IS_USER_LOGGED,
  };
}

export function requestLogin(email: any, password: any) {
  return {
    type: types.REQUEST_LOGIN,
    email,
    password,
  };
}

export function requestSendPwResetEmail(email: any) {
  return {
    type: types.REQUEST_SEND_PW_RESET_EMAIL,
    email,
  };
}
