import { gql } from '@apollo/client';

import { userNotificationsEditFragment } from '../fragments/userNotificationsEdit';

export const getUserNotificationsQuery = gql`
  query userNotifications($id: String!) {
    userNotifications(id: $id) {
      ...UserNotificationsEditor
    }
  }
  ${userNotificationsEditFragment}
`;
