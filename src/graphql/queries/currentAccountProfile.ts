import { gql } from '@apollo/client';

import { accountProfileEditFragment } from '../fragments/accountProfileEdit';

export const getCurrentAccountProfileQuery = gql`
  query currentAccountProfile {
    currentAccountProfile {
      ...AccountProfileEditor
    }
  }
  ${accountProfileEditFragment}
`;
