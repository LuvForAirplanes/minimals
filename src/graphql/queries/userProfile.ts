import { gql } from '@apollo/client';

import { userEditFragment } from '../fragments/userProfileEdit';

export const getUserProfileQuery = gql`
  query userProfile($id: String!) {
    userProfile(id: $id) {
      ...UserEditor
    }
  }
  ${userEditFragment}
`;
