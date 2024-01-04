import { gql } from '@apollo/client';

import { accountProfileEditFragment } from '../fragments/accountProfileEdit';

export const updateCurrentAccountProfileMutation = gql`
  mutation updateCurrentAccountProfile($profileEdit: AccountProfileEditInput!) {
    currentAccountProfile(profileEdit: $profileEdit) {
      ...AccountProfileEditor
    }
  }
  ${accountProfileEditFragment}
`;
