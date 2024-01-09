import { gql } from '@apollo/client';

import { quickUserEditFragment } from '../fragments/quickUserProfileEdit';

export const getQuickUserProfileQuery = gql`
  query quickUserProfile($id: String!) {
    quickUserProfile(id: $id) {
      ...QuickUserEditor
    }
  }
  ${quickUserEditFragment}
`;
