import * as onboardingActions from 'actions/onboarding/onboarding';
import { call, put } from 'redux-saga/effects';
import logger from '../../logger';

export function* userLogout() {
  try {
    logger.info('Logout');
    // yield call(signOut);
    yield put(onboardingActions.loggedIn(false, null));
  } catch (error) {
    logger.error(error);
    logger.error('Error creating user');
  }
}

export function* saveEmail(payload: any) {
  const { email } = payload;
  try {
    logger.info('Saving email');
    yield postSaveEmail(email);
  } catch (error) {
    logger.error(error);
    logger.error('Error creating user');
  }
}

export function* createUserWithEmailAndPW(payload: any) {
  const { user } = payload;
  try {
    const { username, email, password } = user;

    logger.info('Creating new user');
    yield put(ontourActions.setLoader(true));

    const params = [username, email, password];
    yield call(postCreateAccountWithEmailAndPW, params);
    yield put(ontourActions.setLoader(false));
    yield put(onboardingActions.signedUp(true));
    yield put(onboardingActions.updateOnboardingLabel({}));
  } catch (error) {
    logger.error(error);
    logger.error('Error creating user');
    yield put(ontourActions.setLoader(false));
    yield put(
      onboardingActions.updateOnboardingLabel({
        stage: 'signUp',
        type: 'error',
        message: error.message,
      }),
    );
  }
}

export function* isUserLogged() {
  try {
    const user = yield call(onAuthStateChanged);
    if (user) {
      yield put(onboardingActions.loggedIn(true, user));
      yield call(likesSagas.fetchLikes);
    } else {
      yield put(onboardingActions.loggedIn(false, null));
    }
  } catch (error) {
    logger.error(error);
  }
}

export function* loginWithEmailAndPW(payload: any) {
  const { email, password } = payload;
  try {
    logger.info('Logging in');
    yield put(ontourActions.setLoader(true));
    const params = [email, password];
    const signInRes = yield call(signInWithEmailAndPW, [...params]);
    if (signInRes) {
      const user = yield call(getUser);
      yield put(onboardingActions.loggedIn(true, user));
      yield call(likesSagas.fetchLikes);
    }
    yield put(ontourActions.setLoader(false));
    yield put(onboardingActions.updateOnboardingLabel({}));
  } catch (error) {
    logger.error(error);
    logger.error('Error signing in');
    yield put(ontourActions.setLoader(false));
    yield put(
      onboardingActions.updateOnboardingLabel({
        stage: 'signIn',
        type: 'error',
        message: error.message,
      }),
    );
  }
}

export function* sendPWResetEmail(payload: any) {
  const { email } = payload;
  try {
    logger.info('Sending password reset email');
    yield put(ontourActions.setLoader(true));
    yield call(postSendPWResetEmail, email);
    yield put(ontourActions.setLoader(false));
    yield put(
      onboardingActions.updateOnboardingLabel({
        stage: 'password',
        type: 'status',
        message: 'Successfully sent password reset.',
      }),
    );
  } catch (error) {
    logger.error(error);
    logger.error('Error sending password reset email');
    yield put(ontourActions.setLoader(false));
    yield put(
      onboardingActions.updateOnboardingLabel({
        stage: 'password',
        type: 'error',
        message: error.message,
      }),
    );
  }
}
