import Notifications from 'react-notification-system-redux';

export function showSearchNotification(dispatch: any, infoString: string) {
  dispatch(
    Notifications.info({
      title: 'Search',
      message: infoString,
      position: 'tr',
    }),
  );
}
