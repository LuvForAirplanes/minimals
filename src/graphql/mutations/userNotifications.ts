import { gql } from '@apollo/client';

import { userNotificationsEditFragment } from '../fragments/userNotificationsEdit';

export const updateUserNotificationsMutation = gql`
  mutation updateUserNotifications($id: String!, $notificationsEdit: UserNotificationsEditInput!) {
    userNotifications(id: $id, notificationsEdit: $notificationsEdit) {
      ...UserNotificationsEditor
    }
  }
  ${userNotificationsEditFragment}
`;
