import * as types from './types';

export function setAuthUser(authUser: any) {
  return { 
    type: types.AUTH_USER_SET, 
    authUser,
  };
}

export function isGettingUser(bool: any) {
  return {
    type: types.IS_GETTING_USER,
    isGettingUser: bool,
  };
}

export function setUserInfo(info: any) {
  return {
    type: types.SET_USER_INFO,
    userInfo: info,
  };
}

// export function* fetchUserDetails(authUser: any) {
//   try {
//     if (!authUser) {
//       yield put(setAuthUser(null));
//       return;
//     }
//     logger.info('Fetching user details');
//     dispatch(isGettingUser(true));
//     const { uid } = authUser;
//     const userInfo = await accountCoordinator.getUserInfo(uid);
//     dispatch(setUserInfo(userInfo));
//     const authUserDTO = { ...authUser };
//     dispatch(isGettingUser(false));
//     dispatch(setAuthUser(authUserDTO));
//   } catch (error) {
//     logger.error(error);
//     logger.error('Error fetching user details');
//     dispatch(isGettingUser(false));
//   }
// }
