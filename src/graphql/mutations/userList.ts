import { gql } from '@apollo/client';

export const updateUserListMutation = gql`
  mutation updateUserList($id: String!, $profileEdit: UserListEditInput!) {
    userList(id: $id, profileEdit: $profileEdit) {
      id
      firstName
      lastName
      userName
      businessName
      approved
      sellerApproved
      email
      phoneNumber
      location
    }
  }
`;
