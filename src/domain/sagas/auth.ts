// DEPRECATED

import { Auth } from '@typings/state';
import * as authActions from 'actions/auth/auth';
import * as ontourActions from 'actions/ontour/ontour';
import localforage from 'localforage';
import * as api from '../services/api_deprecated';
import { call, put } from 'redux-saga/effects';

localforage.setDriver(localforage.LOCALSTORAGE);

async function callRegister(user: any) {
  return await api.registration(user);
}

async function callRequestLogin(userData: any) {
  return await api.requestLogin(userData);
}

async function getUser() {
  return await localforage.getItem('user');
}

async function removeUser() {
  return await localforage.removeItem('user');
}

export function* signUp(payload: any) {
  const { user } = payload;
  yield put(ontourActions.setLoader(true));

  try {
    const regData = yield call(callRegister, user);
    const { email, username, errors } = regData.data;

    if (errors) {
      yield put(authActions.setErrors(errors));
    }
    if (email && username && !errors) {
      yield put(authActions.register({ email, username }));
    }

    yield put(ontourActions.setLoader(false));
  } catch (e) {
    yield put(ontourActions.setLoader(false));
  }
}

export function* signIn(payload: any) {
  const { userData } = payload;
  yield put(ontourActions.setLoader(true));

  try {
    const loginData = yield call(callRequestLogin, userData);
    const { user, token, errors } = loginData.data;

    if (errors) {
      yield put(authActions.setErrors(errors));
    }
    if (user && token && !errors) {
      yield put(authActions.login(user, token, true));
      localforage.setItem('user', { user, token });
    }

    yield put(ontourActions.setLoader(false));
  } catch (e) {
    yield put(ontourActions.setLoader(false));
  }
}

export function* checkSignIn() {
  const savedUser: Auth | any = yield call(getUser);

  if (!savedUser) {
    return;
  }

  const { user, token } = savedUser;

  if (user && token) {
    yield put(authActions.login(user, token, true));
  }
}

export function* logoutUser() {
  yield call(removeUser);
  yield put(authActions.logout());
}
