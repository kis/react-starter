// DEPRECATED

import * as types from './types';

export function initAuth() {
  return {
    type: types.INIT_AUTH,
  };
}

export function register(user: any) {
  return {
    type: types.REGISTER,
    user,
  };
}

export function setErrors(errors: any) {
  return {
    type: types.SET_ERRORS,
    errors,
  };
}

export function login(user: any, token: string, logged: boolean) {
  return {
    type: types.LOGIN,
    user,
    token,
    logged,
  };
}

export function logout() {
  return {
    type: types.LOGOUT,
  };
}
