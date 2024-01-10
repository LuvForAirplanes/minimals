import { gql } from '@apollo/client';

export const UserFragment = gql`
  fragment User on ApplicationUser {
    __typename
    id
    firstName
    lastName
    email
    userName
    businessName
    approved
    sellerApproved
    phoneNumber
    location
    approved
    sellerApproved
  }
`;
