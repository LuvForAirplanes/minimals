import { gql } from '@apollo/client';

export const accountNotificationEditFragment = gql`
  fragment AccountNotificationEditor on AccountNotificationsEdit {
    id
    notifyOnMessage
  }
`;
