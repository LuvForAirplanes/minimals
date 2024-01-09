import { gql } from '@apollo/client';

import { quickUserEditFragment } from '../fragments/quickUserProfileEdit';

export const updateQuickUserMutation = gql`
  mutation quickUser($id: String!, $profileEdit: QuickUserEditInput!) {
    quickUser(id: $id, profileEdit: $profileEdit) {
      ...QuickUserEditor
    }
  }
  ${quickUserEditFragment}
`;
