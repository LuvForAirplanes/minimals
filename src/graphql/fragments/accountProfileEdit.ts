import { gql } from '@apollo/client';

export const accountProfileEditFragment = gql`
  fragment AccountProfileEditor on AccountProfileEdit {
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
