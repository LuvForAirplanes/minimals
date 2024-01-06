import { gql } from '@apollo/client';

export const userEditFragment = gql`
  fragment UserEditor on UserEdit {
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
