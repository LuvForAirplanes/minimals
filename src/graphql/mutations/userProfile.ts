import { gql } from '@apollo/client';

import { userEditFragment } from '../fragments/userProfileEdit';

export const updateUserMutation = gql`
  mutation user($id: String!, $profileEdit: UserEditInput!) {
    user(id: $id, profileEdit: $profileEdit) {
      ...UserEditor
    }
  }
  ${userEditFragment}
`;
