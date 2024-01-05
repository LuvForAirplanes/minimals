import { gql } from '@apollo/client';

import { accountNotificationEditFragment } from '../fragments/accountNotificationEdit';

export const updateCurrentAccountNotificationsMutation = gql`
  mutation updateCurrentAccountNotifications($notificationsEdit: AccountNotificationsEditInput!) {
    currentAccountNotifications(notificationsEdit: $notificationsEdit) {
      ...AccountNotificationEditor
    }
  }
  ${accountNotificationEditFragment}
`;
