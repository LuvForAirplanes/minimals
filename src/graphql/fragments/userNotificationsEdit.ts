import { gql } from '@apollo/client';

export const userNotificationsEditFragment = gql`
  fragment UserNotificationsEditor on UserNotificationsEdit {
    id
    notifyOnMessage
  }
`;
