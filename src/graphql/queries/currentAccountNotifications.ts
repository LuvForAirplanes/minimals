import { gql } from '@apollo/client';

import { accountNotificationEditFragment } from '../fragments/accountNotificationEdit';

export const getCurrentAccountNotificationsQuery = gql`
  query currentAccountNotifications {
    currentAccountNotifications {
      ...AccountNotificationEditor
    }
  }
  ${accountNotificationEditFragment}
`;
