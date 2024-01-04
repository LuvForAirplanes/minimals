import { gql } from '@apollo/client';

import { accountNotificationEditFragment } from '../fragments/accountNotificationEdit';

export const updateCurrentAccountNotificationsMutation = gql`
  mutation updateCurrentAccountNotifications($profileEdit: AccountNotificationsEditInput!) {
    currentAccountNotifications(profileEdit: $profileEdit) {
      ...AccountNotificationEditor
    }
  }
  ${accountNotificationEditFragment}
`;
