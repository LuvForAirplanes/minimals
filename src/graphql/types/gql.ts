/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment AccountNotificationEditor on AccountNotificationsEdit {\n    id\n    notifyOnMessage\n  }\n": types.AccountNotificationEditorFragmentDoc,
    "\n  fragment AccountProfileEditor on AccountProfileEdit {\n    id\n    about\n    businessName\n    email\n    firstName\n    lastName\n    job\n    location\n    phone\n    telegramUsername\n    username\n    website\n  }\n": types.AccountProfileEditorFragmentDoc,
    "\n  fragment QuickUserEditor on QuickUserEdit {\n    id\n    about\n    businessName\n    email\n    firstName\n    lastName\n    job\n    location\n    phone\n    telegramUsername\n    username\n    website\n  }\n": types.QuickUserEditorFragmentDoc,
    "\n  fragment UserNotificationsEditor on UserNotificationsEdit {\n    id\n    notifyOnMessage\n  }\n": types.UserNotificationsEditorFragmentDoc,
    "\n  fragment UserEditor on UserEdit {\n    id\n    about\n    businessName\n    email\n    firstName\n    lastName\n    job\n    location\n    phone\n    telegramUsername\n    username\n    website\n    churchGroup\n    approved\n    sellerApproved\n    emailVerified\n    phoneVerified\n  }\n": types.UserEditorFragmentDoc,
    "\n  mutation changeAccountPassword($existingPassword: String!, $newPassword: String!) {\n    changeAccountPassword(existingPassword: $existingPassword, newPassword: $newPassword)\n  }\n": types.ChangeAccountPasswordDocument,
    "\n  mutation changeUserPassword($id: String!, $existingPassword: String!, $newPassword: String!) {\n    changeUserPassword(id: $id, existingPassword: $existingPassword, newPassword: $newPassword)\n  }\n": types.ChangeUserPasswordDocument,
    "\n  mutation updateCurrentAccountNotifications($notificationsEdit: AccountNotificationsEditInput!) {\n    currentAccountNotifications(notificationsEdit: $notificationsEdit) {\n      ...AccountNotificationEditor\n    }\n  }\n  \n": types.UpdateCurrentAccountNotificationsDocument,
    "\n  mutation updateCurrentAccountProfile($profileEdit: AccountProfileEditInput!) {\n    currentAccountProfile(profileEdit: $profileEdit) {\n      ...AccountProfileEditor\n    }\n  }\n  \n": types.UpdateCurrentAccountProfileDocument,
    "\n  mutation deleteUser($id: String, $ids: [String!]) {\n    deleteUser(id: $id, ids: $ids)\n  }\n": types.DeleteUserDocument,
    "\n  mutation quickUser($id: String!, $profileEdit: QuickUserEditInput!) {\n    quickUser(id: $id, profileEdit: $profileEdit) {\n      ...QuickUserEditor\n    }\n  }\n  \n": types.QuickUserDocument,
    "\n  mutation registerUser($user: RegisterUserEditInput!) {\n    registerUser(user: $user)\n  }\n": types.RegisterUserDocument,
    "\n  mutation uploadCurrentBackgroundImage($file: Upload!) {\n    uploadCurrentBackgroundImage(file: $file)\n  }\n": types.UploadCurrentBackgroundImageDocument,
    "\n  mutation uploadCurrentProfileImage($file: Upload!) {\n    uploadCurrentProfileImage(file: $file)\n  }\n": types.UploadCurrentProfileImageDocument,
    "\n  mutation uploadUserBackgroundImage($id: String!, $file: Upload!) {\n    uploadUserBackgroundImage(id: $id, file: $file)\n  }\n": types.UploadUserBackgroundImageDocument,
    "\n  mutation uploadUserProfileImage($id: String!, $file: Upload!) {\n    uploadUserProfileImage(id: $id, file: $file)\n  }\n": types.UploadUserProfileImageDocument,
    "\n  mutation updateUserList($id: String!, $profileEdit: UserListEditInput!) {\n    userList(id: $id, profileEdit: $profileEdit) {\n      id\n      firstName\n      lastName\n      userName\n      businessName\n      approved\n      sellerApproved\n      email\n      phoneNumber\n      location\n    }\n  }\n": types.UpdateUserListDocument,
    "\n  mutation updateUserNotifications($id: String!, $notificationsEdit: UserNotificationsEditInput!) {\n    userNotifications(id: $id, notificationsEdit: $notificationsEdit) {\n      ...UserNotificationsEditor\n    }\n  }\n  \n": types.UpdateUserNotificationsDocument,
    "\n  mutation user($id: String!, $profileEdit: UserEditInput!) {\n    user(id: $id, profileEdit: $profileEdit) {\n      ...UserEditor\n    }\n  }\n  \n": types.UserDocument,
    "\n  query churchGroups {\n    churchGroups {\n      id\n      name\n    }\n  }\n": types.ChurchGroupsDocument,
    "\n  query currentAccountNotifications {\n    currentAccountNotifications {\n      ...AccountNotificationEditor\n    }\n  }\n  \n": types.CurrentAccountNotificationsDocument,
    "\n  query currentAccountProfile {\n    currentAccountProfile {\n      ...AccountProfileEditor\n    }\n    currentAccountProfileImage\n  }\n  \n": types.CurrentAccountProfileDocument,
    "\n  query quickUserProfile($id: String!) {\n    quickUserProfile(id: $id) {\n      ...QuickUserEditor\n    }\n  }\n  \n": types.QuickUserProfileDocument,
    "\n  fragment SocialUser on ApplicationUser {\n    __typename\n    id\n    fullName\n    firstName\n    lastName\n    location\n    telegramUsername\n    email\n    phoneNumber\n    following\n    followers\n    listings\n    userName\n  }\n": types.SocialUserFragmentDoc,
    "\n  query socialUsers($skip: Int = 0, $take: Int = 21) {\n    totalUsers\n    offsetUsers(skip: $skip, take: $take) {\n      items {\n        ...SocialUser\n      }\n    }\n  }\n  \n": types.SocialUsersDocument,
    "\n  query userNotifications($id: String!) {\n    userNotifications(id: $id) {\n      ...UserNotificationsEditor\n    }\n  }\n  \n": types.UserNotificationsDocument,
    "\n  query userProfile($id: String!) {\n    userProfile(id: $id) {\n      ...UserEditor\n    }\n  }\n  \n": types.UserProfileDocument,
    "\n  query userStatistics {\n    userStatistics {\n      all\n      approved\n      pending\n      rejected\n    }\n  }\n": types.UserStatisticsDocument,
    "\n  fragment User on ApplicationUser {\n    __typename\n    id\n    firstName\n    lastName\n    email\n    userName\n    businessName\n    approved\n    sellerApproved\n    phoneNumber\n    location\n    approved\n    sellerApproved\n  }\n": types.UserFragmentDoc,
    "\n  query users(\n    $first: Int = 50\n    $after: String\n    $order: [ApplicationUserSortInput!]\n    $where: ApplicationUserFilterInput\n  ) {\n    data: users(first: $first, after: $after, order: $order, where: $where) {\n      count: totalCount\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      nodes {\n        ...User\n      }\n    }\n  }\n  \n": types.UsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AccountNotificationEditor on AccountNotificationsEdit {\n    id\n    notifyOnMessage\n  }\n"): (typeof documents)["\n  fragment AccountNotificationEditor on AccountNotificationsEdit {\n    id\n    notifyOnMessage\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AccountProfileEditor on AccountProfileEdit {\n    id\n    about\n    businessName\n    email\n    firstName\n    lastName\n    job\n    location\n    phone\n    telegramUsername\n    username\n    website\n  }\n"): (typeof documents)["\n  fragment AccountProfileEditor on AccountProfileEdit {\n    id\n    about\n    businessName\n    email\n    firstName\n    lastName\n    job\n    location\n    phone\n    telegramUsername\n    username\n    website\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment QuickUserEditor on QuickUserEdit {\n    id\n    about\n    businessName\n    email\n    firstName\n    lastName\n    job\n    location\n    phone\n    telegramUsername\n    username\n    website\n  }\n"): (typeof documents)["\n  fragment QuickUserEditor on QuickUserEdit {\n    id\n    about\n    businessName\n    email\n    firstName\n    lastName\n    job\n    location\n    phone\n    telegramUsername\n    username\n    website\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserNotificationsEditor on UserNotificationsEdit {\n    id\n    notifyOnMessage\n  }\n"): (typeof documents)["\n  fragment UserNotificationsEditor on UserNotificationsEdit {\n    id\n    notifyOnMessage\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserEditor on UserEdit {\n    id\n    about\n    businessName\n    email\n    firstName\n    lastName\n    job\n    location\n    phone\n    telegramUsername\n    username\n    website\n    churchGroup\n    approved\n    sellerApproved\n    emailVerified\n    phoneVerified\n  }\n"): (typeof documents)["\n  fragment UserEditor on UserEdit {\n    id\n    about\n    businessName\n    email\n    firstName\n    lastName\n    job\n    location\n    phone\n    telegramUsername\n    username\n    website\n    churchGroup\n    approved\n    sellerApproved\n    emailVerified\n    phoneVerified\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation changeAccountPassword($existingPassword: String!, $newPassword: String!) {\n    changeAccountPassword(existingPassword: $existingPassword, newPassword: $newPassword)\n  }\n"): (typeof documents)["\n  mutation changeAccountPassword($existingPassword: String!, $newPassword: String!) {\n    changeAccountPassword(existingPassword: $existingPassword, newPassword: $newPassword)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation changeUserPassword($id: String!, $existingPassword: String!, $newPassword: String!) {\n    changeUserPassword(id: $id, existingPassword: $existingPassword, newPassword: $newPassword)\n  }\n"): (typeof documents)["\n  mutation changeUserPassword($id: String!, $existingPassword: String!, $newPassword: String!) {\n    changeUserPassword(id: $id, existingPassword: $existingPassword, newPassword: $newPassword)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateCurrentAccountNotifications($notificationsEdit: AccountNotificationsEditInput!) {\n    currentAccountNotifications(notificationsEdit: $notificationsEdit) {\n      ...AccountNotificationEditor\n    }\n  }\n  \n"): (typeof documents)["\n  mutation updateCurrentAccountNotifications($notificationsEdit: AccountNotificationsEditInput!) {\n    currentAccountNotifications(notificationsEdit: $notificationsEdit) {\n      ...AccountNotificationEditor\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateCurrentAccountProfile($profileEdit: AccountProfileEditInput!) {\n    currentAccountProfile(profileEdit: $profileEdit) {\n      ...AccountProfileEditor\n    }\n  }\n  \n"): (typeof documents)["\n  mutation updateCurrentAccountProfile($profileEdit: AccountProfileEditInput!) {\n    currentAccountProfile(profileEdit: $profileEdit) {\n      ...AccountProfileEditor\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteUser($id: String, $ids: [String!]) {\n    deleteUser(id: $id, ids: $ids)\n  }\n"): (typeof documents)["\n  mutation deleteUser($id: String, $ids: [String!]) {\n    deleteUser(id: $id, ids: $ids)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation quickUser($id: String!, $profileEdit: QuickUserEditInput!) {\n    quickUser(id: $id, profileEdit: $profileEdit) {\n      ...QuickUserEditor\n    }\n  }\n  \n"): (typeof documents)["\n  mutation quickUser($id: String!, $profileEdit: QuickUserEditInput!) {\n    quickUser(id: $id, profileEdit: $profileEdit) {\n      ...QuickUserEditor\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation registerUser($user: RegisterUserEditInput!) {\n    registerUser(user: $user)\n  }\n"): (typeof documents)["\n  mutation registerUser($user: RegisterUserEditInput!) {\n    registerUser(user: $user)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation uploadCurrentBackgroundImage($file: Upload!) {\n    uploadCurrentBackgroundImage(file: $file)\n  }\n"): (typeof documents)["\n  mutation uploadCurrentBackgroundImage($file: Upload!) {\n    uploadCurrentBackgroundImage(file: $file)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation uploadCurrentProfileImage($file: Upload!) {\n    uploadCurrentProfileImage(file: $file)\n  }\n"): (typeof documents)["\n  mutation uploadCurrentProfileImage($file: Upload!) {\n    uploadCurrentProfileImage(file: $file)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation uploadUserBackgroundImage($id: String!, $file: Upload!) {\n    uploadUserBackgroundImage(id: $id, file: $file)\n  }\n"): (typeof documents)["\n  mutation uploadUserBackgroundImage($id: String!, $file: Upload!) {\n    uploadUserBackgroundImage(id: $id, file: $file)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation uploadUserProfileImage($id: String!, $file: Upload!) {\n    uploadUserProfileImage(id: $id, file: $file)\n  }\n"): (typeof documents)["\n  mutation uploadUserProfileImage($id: String!, $file: Upload!) {\n    uploadUserProfileImage(id: $id, file: $file)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateUserList($id: String!, $profileEdit: UserListEditInput!) {\n    userList(id: $id, profileEdit: $profileEdit) {\n      id\n      firstName\n      lastName\n      userName\n      businessName\n      approved\n      sellerApproved\n      email\n      phoneNumber\n      location\n    }\n  }\n"): (typeof documents)["\n  mutation updateUserList($id: String!, $profileEdit: UserListEditInput!) {\n    userList(id: $id, profileEdit: $profileEdit) {\n      id\n      firstName\n      lastName\n      userName\n      businessName\n      approved\n      sellerApproved\n      email\n      phoneNumber\n      location\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateUserNotifications($id: String!, $notificationsEdit: UserNotificationsEditInput!) {\n    userNotifications(id: $id, notificationsEdit: $notificationsEdit) {\n      ...UserNotificationsEditor\n    }\n  }\n  \n"): (typeof documents)["\n  mutation updateUserNotifications($id: String!, $notificationsEdit: UserNotificationsEditInput!) {\n    userNotifications(id: $id, notificationsEdit: $notificationsEdit) {\n      ...UserNotificationsEditor\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation user($id: String!, $profileEdit: UserEditInput!) {\n    user(id: $id, profileEdit: $profileEdit) {\n      ...UserEditor\n    }\n  }\n  \n"): (typeof documents)["\n  mutation user($id: String!, $profileEdit: UserEditInput!) {\n    user(id: $id, profileEdit: $profileEdit) {\n      ...UserEditor\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query churchGroups {\n    churchGroups {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query churchGroups {\n    churchGroups {\n      id\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query currentAccountNotifications {\n    currentAccountNotifications {\n      ...AccountNotificationEditor\n    }\n  }\n  \n"): (typeof documents)["\n  query currentAccountNotifications {\n    currentAccountNotifications {\n      ...AccountNotificationEditor\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query currentAccountProfile {\n    currentAccountProfile {\n      ...AccountProfileEditor\n    }\n    currentAccountProfileImage\n  }\n  \n"): (typeof documents)["\n  query currentAccountProfile {\n    currentAccountProfile {\n      ...AccountProfileEditor\n    }\n    currentAccountProfileImage\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query quickUserProfile($id: String!) {\n    quickUserProfile(id: $id) {\n      ...QuickUserEditor\n    }\n  }\n  \n"): (typeof documents)["\n  query quickUserProfile($id: String!) {\n    quickUserProfile(id: $id) {\n      ...QuickUserEditor\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SocialUser on ApplicationUser {\n    __typename\n    id\n    fullName\n    firstName\n    lastName\n    location\n    telegramUsername\n    email\n    phoneNumber\n    following\n    followers\n    listings\n    userName\n  }\n"): (typeof documents)["\n  fragment SocialUser on ApplicationUser {\n    __typename\n    id\n    fullName\n    firstName\n    lastName\n    location\n    telegramUsername\n    email\n    phoneNumber\n    following\n    followers\n    listings\n    userName\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query socialUsers($skip: Int = 0, $take: Int = 21) {\n    totalUsers\n    offsetUsers(skip: $skip, take: $take) {\n      items {\n        ...SocialUser\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query socialUsers($skip: Int = 0, $take: Int = 21) {\n    totalUsers\n    offsetUsers(skip: $skip, take: $take) {\n      items {\n        ...SocialUser\n      }\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query userNotifications($id: String!) {\n    userNotifications(id: $id) {\n      ...UserNotificationsEditor\n    }\n  }\n  \n"): (typeof documents)["\n  query userNotifications($id: String!) {\n    userNotifications(id: $id) {\n      ...UserNotificationsEditor\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query userProfile($id: String!) {\n    userProfile(id: $id) {\n      ...UserEditor\n    }\n  }\n  \n"): (typeof documents)["\n  query userProfile($id: String!) {\n    userProfile(id: $id) {\n      ...UserEditor\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query userStatistics {\n    userStatistics {\n      all\n      approved\n      pending\n      rejected\n    }\n  }\n"): (typeof documents)["\n  query userStatistics {\n    userStatistics {\n      all\n      approved\n      pending\n      rejected\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment User on ApplicationUser {\n    __typename\n    id\n    firstName\n    lastName\n    email\n    userName\n    businessName\n    approved\n    sellerApproved\n    phoneNumber\n    location\n    approved\n    sellerApproved\n  }\n"): (typeof documents)["\n  fragment User on ApplicationUser {\n    __typename\n    id\n    firstName\n    lastName\n    email\n    userName\n    businessName\n    approved\n    sellerApproved\n    phoneNumber\n    location\n    approved\n    sellerApproved\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query users(\n    $first: Int = 50\n    $after: String\n    $order: [ApplicationUserSortInput!]\n    $where: ApplicationUserFilterInput\n  ) {\n    data: users(first: $first, after: $after, order: $order, where: $where) {\n      count: totalCount\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      nodes {\n        ...User\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query users(\n    $first: Int = 50\n    $after: String\n    $order: [ApplicationUserSortInput!]\n    $where: ApplicationUserFilterInput\n  ) {\n    data: users(first: $first, after: $after, order: $order, where: $where) {\n      count: totalCount\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n      nodes {\n        ...User\n      }\n    }\n  }\n  \n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;