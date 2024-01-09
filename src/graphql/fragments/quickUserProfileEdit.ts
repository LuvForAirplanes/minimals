import { gql } from '@apollo/client';

export const quickUserEditFragment = gql`
  fragment QuickUserEditor on QuickUserEdit {
    id
    about
    businessName
    email
    firstName
    lastName
    job
    location
    phone
    telegramUsername
    username
    website
  }
`;
