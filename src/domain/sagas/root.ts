import { all, takeLatest } from 'redux-saga/effects';
import * as onboardingSagas from './onboarding';
import * as onboardingActions from 'actions/onboarding/types';

export default function* rootSaga() {
  yield all([
    takeLatest(onboardingActions.REQUEST_USER_LOGOUT, onboardingSagas.userLogout),
    takeLatest(onboardingActions.REQUEST_SAVE_EMAIL, onboardingSagas.saveEmail),
    takeLatest(
      onboardingActions.REQUEST_CREATE_USER,
      onboardingSagas.createUserWithEmailAndPW,
    ),
    takeLatest(onboardingActions.REQUEST_IS_USER_LOGGED, onboardingSagas.isUserLogged),
    takeLatest(onboardingActions.REQUEST_LOGIN, onboardingSagas.loginWithEmailAndPW),
    takeLatest(
      onboardingActions.REQUEST_SEND_PW_RESET_EMAIL,
      onboardingSagas.sendPWResetEmail,
    ),
  ]);
}
