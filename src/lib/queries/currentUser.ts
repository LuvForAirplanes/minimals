import { gql } from '@apollo/client';

export const getCurrentUserEditQuery = gql`
  query currentUserEdit {
    currentUserEdit {
      id
      username
      phoneNumber
      phoneNumberConfirmed
      email
      emailConfirmed
      birthdate
      gender
      firstName
      middleName
      lastName
      knownAs
      job
      location
      registered
      updated
      profileImage
      backgroundImage
      businessName
      prefix
      suffix
      about
      telegramUsername
      website
      lastLogin
    }
  }
`;
