/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Byte` scalar type represents non-fractional whole numeric values. Byte can represent values between 0 and 255. */
  Byte: { input: any; output: any; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: any; output: any; }
  UUID: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AccountNotificationsEdit = {
  __typename?: 'AccountNotificationsEdit';
  id: Scalars['String']['output'];
  notifyOnMessage: Scalars['Boolean']['output'];
};

export type AccountNotificationsEditInput = {
  id: Scalars['String']['input'];
  notifyOnMessage: Scalars['Boolean']['input'];
};

export type AccountProfileEdit = {
  __typename?: 'AccountProfileEdit';
  about: Scalars['String']['output'];
  businessName?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  job?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  telegramUsername?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type AccountProfileEditInput = {
  about: Scalars['String']['input'];
  businessName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  job?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  telegramUsername?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type Address = {
  __typename?: 'Address';
  added: Scalars['DateTime']['output'];
  attention?: Maybe<Scalars['String']['output']>;
  completeAddress: Scalars['String']['output'];
  completeAddressLine: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  line1?: Maybe<Scalars['String']['output']>;
  line2?: Maybe<Scalars['String']['output']>;
  mak?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<PostalCode>;
  postalCodeId?: Maybe<Scalars['String']['output']>;
  postalCodeIdResolved: Scalars['String']['output'];
  postalExt?: Maybe<Scalars['String']['output']>;
  priority: Scalars['Int']['output'];
  updated: Scalars['DateTime']['output'];
  user: ApplicationUser;
  userId: Scalars['String']['output'];
};

export type AddressFilterInput = {
  added?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<AddressFilterInput>>;
  attention?: InputMaybe<StringOperationFilterInput>;
  completeAddress?: InputMaybe<StringOperationFilterInput>;
  completeAddressLine?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  line1?: InputMaybe<StringOperationFilterInput>;
  line2?: InputMaybe<StringOperationFilterInput>;
  mak?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<AddressFilterInput>>;
  postalCode?: InputMaybe<PostalCodeFilterInput>;
  postalCodeId?: InputMaybe<StringOperationFilterInput>;
  postalCodeIdResolved?: InputMaybe<StringOperationFilterInput>;
  postalExt?: InputMaybe<StringOperationFilterInput>;
  priority?: InputMaybe<IntOperationFilterInput>;
  updated?: InputMaybe<DateTimeOperationFilterInput>;
  user?: InputMaybe<ApplicationUserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type ApplicationUser = {
  __typename?: 'ApplicationUser';
  about: Scalars['String']['output'];
  accessFailedCount: Scalars['Int']['output'];
  addresses: Array<Address>;
  approved?: Maybe<Scalars['Boolean']['output']>;
  approvedBy?: Maybe<ApplicationUser>;
  approvedById?: Maybe<Scalars['String']['output']>;
  approvedUsers: Array<ApplicationUser>;
  backgroundImage?: Maybe<Array<Scalars['Byte']['output']>>;
  birthdate?: Maybe<Scalars['DateTime']['output']>;
  businessName?: Maybe<Scalars['String']['output']>;
  concurrencyStamp?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailConfirmed: Scalars['Boolean']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  followers: Scalars['Long']['output'];
  following: Scalars['Long']['output'];
  friends: Array<Friend>;
  fullName: Scalars['String']['output'];
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  job?: Maybe<Scalars['String']['output']>;
  knownAs?: Maybe<Scalars['String']['output']>;
  knownAsResolved?: Maybe<Scalars['String']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  listings: Scalars['Long']['output'];
  location?: Maybe<Scalars['String']['output']>;
  lockoutEnabled: Scalars['Boolean']['output'];
  lockoutEnd?: Maybe<Scalars['DateTime']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  myFriends: Array<Friend>;
  normalizedEmail?: Maybe<Scalars['String']['output']>;
  normalizedUserName?: Maybe<Scalars['String']['output']>;
  notifyOnMessage: Scalars['Boolean']['output'];
  passwordHash?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberConfirmed: Scalars['Boolean']['output'];
  prefix?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Array<Scalars['Byte']['output']>>;
  receivedMessages: Array<Message>;
  registered?: Maybe<Scalars['DateTime']['output']>;
  securityStamp?: Maybe<Scalars['String']['output']>;
  sellerApproved?: Maybe<Scalars['Boolean']['output']>;
  sellerApprovedBy?: Maybe<ApplicationUser>;
  sellerApprovedById?: Maybe<Scalars['String']['output']>;
  sellerApprovedUsers: Array<ApplicationUser>;
  sentMessages: Array<Message>;
  suffix?: Maybe<Scalars['String']['output']>;
  telegramUsername?: Maybe<Scalars['String']['output']>;
  twoFactorEnabled: Scalars['Boolean']['output'];
  updated?: Maybe<Scalars['DateTime']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type ApplicationUserFilterInput = {
  about?: InputMaybe<StringOperationFilterInput>;
  accessFailedCount?: InputMaybe<IntOperationFilterInput>;
  addresses?: InputMaybe<ListFilterInputTypeOfAddressFilterInput>;
  and?: InputMaybe<Array<ApplicationUserFilterInput>>;
  approved?: InputMaybe<BooleanOperationFilterInput>;
  approvedBy?: InputMaybe<ApplicationUserFilterInput>;
  approvedById?: InputMaybe<StringOperationFilterInput>;
  approvedUsers?: InputMaybe<ListFilterInputTypeOfApplicationUserFilterInput>;
  backgroundImage?: InputMaybe<ListByteOperationFilterInput>;
  birthdate?: InputMaybe<DateTimeOperationFilterInput>;
  businessName?: InputMaybe<StringOperationFilterInput>;
  concurrencyStamp?: InputMaybe<StringOperationFilterInput>;
  email?: InputMaybe<StringOperationFilterInput>;
  emailConfirmed?: InputMaybe<BooleanOperationFilterInput>;
  firstName?: InputMaybe<StringOperationFilterInput>;
  friends?: InputMaybe<ListFilterInputTypeOfFriendFilterInput>;
  fullName?: InputMaybe<StringOperationFilterInput>;
  gender?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<StringOperationFilterInput>;
  job?: InputMaybe<StringOperationFilterInput>;
  knownAs?: InputMaybe<StringOperationFilterInput>;
  knownAsResolved?: InputMaybe<StringOperationFilterInput>;
  lastLogin?: InputMaybe<DateTimeOperationFilterInput>;
  lastName?: InputMaybe<StringOperationFilterInput>;
  listings?: InputMaybe<ListFilterInputTypeOfListingFilterInput>;
  location?: InputMaybe<StringOperationFilterInput>;
  lockoutEnabled?: InputMaybe<BooleanOperationFilterInput>;
  lockoutEnd?: InputMaybe<DateTimeOperationFilterInput>;
  middleName?: InputMaybe<StringOperationFilterInput>;
  myFriends?: InputMaybe<ListFilterInputTypeOfFriendFilterInput>;
  normalizedEmail?: InputMaybe<StringOperationFilterInput>;
  normalizedUserName?: InputMaybe<StringOperationFilterInput>;
  notifyOnMessage?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<ApplicationUserFilterInput>>;
  passwordHash?: InputMaybe<StringOperationFilterInput>;
  phoneNumber?: InputMaybe<StringOperationFilterInput>;
  phoneNumberConfirmed?: InputMaybe<BooleanOperationFilterInput>;
  prefix?: InputMaybe<StringOperationFilterInput>;
  profileImage?: InputMaybe<ListByteOperationFilterInput>;
  receivedMessages?: InputMaybe<ListFilterInputTypeOfMessageFilterInput>;
  registered?: InputMaybe<DateTimeOperationFilterInput>;
  securityStamp?: InputMaybe<StringOperationFilterInput>;
  sellerApproved?: InputMaybe<BooleanOperationFilterInput>;
  sellerApprovedBy?: InputMaybe<ApplicationUserFilterInput>;
  sellerApprovedById?: InputMaybe<StringOperationFilterInput>;
  sellerApprovedUsers?: InputMaybe<ListFilterInputTypeOfApplicationUserFilterInput>;
  sentMessages?: InputMaybe<ListFilterInputTypeOfMessageFilterInput>;
  suffix?: InputMaybe<StringOperationFilterInput>;
  telegramUsername?: InputMaybe<StringOperationFilterInput>;
  twoFactorEnabled?: InputMaybe<BooleanOperationFilterInput>;
  updated?: InputMaybe<DateTimeOperationFilterInput>;
  userName?: InputMaybe<StringOperationFilterInput>;
  website?: InputMaybe<StringOperationFilterInput>;
};

export type ApplicationUserSortInput = {
  about?: InputMaybe<SortEnumType>;
  accessFailedCount?: InputMaybe<SortEnumType>;
  approved?: InputMaybe<SortEnumType>;
  approvedBy?: InputMaybe<ApplicationUserSortInput>;
  approvedById?: InputMaybe<SortEnumType>;
  birthdate?: InputMaybe<SortEnumType>;
  businessName?: InputMaybe<SortEnumType>;
  concurrencyStamp?: InputMaybe<SortEnumType>;
  email?: InputMaybe<SortEnumType>;
  emailConfirmed?: InputMaybe<SortEnumType>;
  firstName?: InputMaybe<SortEnumType>;
  fullName?: InputMaybe<SortEnumType>;
  gender?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  job?: InputMaybe<SortEnumType>;
  knownAs?: InputMaybe<SortEnumType>;
  knownAsResolved?: InputMaybe<SortEnumType>;
  lastLogin?: InputMaybe<SortEnumType>;
  lastName?: InputMaybe<SortEnumType>;
  location?: InputMaybe<SortEnumType>;
  lockoutEnabled?: InputMaybe<SortEnumType>;
  lockoutEnd?: InputMaybe<SortEnumType>;
  middleName?: InputMaybe<SortEnumType>;
  normalizedEmail?: InputMaybe<SortEnumType>;
  normalizedUserName?: InputMaybe<SortEnumType>;
  notifyOnMessage?: InputMaybe<SortEnumType>;
  passwordHash?: InputMaybe<SortEnumType>;
  phoneNumber?: InputMaybe<SortEnumType>;
  phoneNumberConfirmed?: InputMaybe<SortEnumType>;
  prefix?: InputMaybe<SortEnumType>;
  registered?: InputMaybe<SortEnumType>;
  securityStamp?: InputMaybe<SortEnumType>;
  sellerApproved?: InputMaybe<SortEnumType>;
  sellerApprovedBy?: InputMaybe<ApplicationUserSortInput>;
  sellerApprovedById?: InputMaybe<SortEnumType>;
  suffix?: InputMaybe<SortEnumType>;
  telegramUsername?: InputMaybe<SortEnumType>;
  twoFactorEnabled?: InputMaybe<SortEnumType>;
  updated?: InputMaybe<SortEnumType>;
  userName?: InputMaybe<SortEnumType>;
  website?: InputMaybe<SortEnumType>;
};

export type Asset = {
  __typename?: 'Asset';
  added: Scalars['DateTime']['output'];
  data: Array<Scalars['Byte']['output']>;
  extension: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
};

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  neq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ByteOperationFilterInput = {
  eq?: InputMaybe<Scalars['Byte']['input']>;
  gt?: InputMaybe<Scalars['Byte']['input']>;
  gte?: InputMaybe<Scalars['Byte']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  lt?: InputMaybe<Scalars['Byte']['input']>;
  lte?: InputMaybe<Scalars['Byte']['input']>;
  neq?: InputMaybe<Scalars['Byte']['input']>;
  ngt?: InputMaybe<Scalars['Byte']['input']>;
  ngte?: InputMaybe<Scalars['Byte']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Byte']['input']>>>;
  nlt?: InputMaybe<Scalars['Byte']['input']>;
  nlte?: InputMaybe<Scalars['Byte']['input']>;
};

/** Information about the offset pagination. */
export type CollectionSegmentInfo = {
  __typename?: 'CollectionSegmentInfo';
  /** Indicates whether more items exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more items exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
};

export type DashboardStats = {
  __typename?: 'DashboardStats';
  users: Scalars['Int']['output'];
};

export type DateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  ngt?: InputMaybe<Scalars['DateTime']['input']>;
  ngte?: InputMaybe<Scalars['DateTime']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  nlt?: InputMaybe<Scalars['DateTime']['input']>;
  nlte?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Friend = {
  __typename?: 'Friend';
  befriended: Scalars['DateTime']['output'];
  friendUser: ApplicationUser;
  friendUserId: Scalars['String']['output'];
  user: ApplicationUser;
  userId: Scalars['String']['output'];
};

export type FriendFilterInput = {
  and?: InputMaybe<Array<FriendFilterInput>>;
  befriended?: InputMaybe<DateTimeOperationFilterInput>;
  friendUser?: InputMaybe<ApplicationUserFilterInput>;
  friendUserId?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<FriendFilterInput>>;
  user?: InputMaybe<ApplicationUserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type IntOperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  ngt?: InputMaybe<Scalars['Int']['input']>;
  ngte?: InputMaybe<Scalars['Int']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  nlt?: InputMaybe<Scalars['Int']['input']>;
  nlte?: InputMaybe<Scalars['Int']['input']>;
};

export type ListByteOperationFilterInput = {
  all?: InputMaybe<ByteOperationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ByteOperationFilterInput>;
  some?: InputMaybe<ByteOperationFilterInput>;
};

export type ListFilterInputTypeOfAddressFilterInput = {
  all?: InputMaybe<AddressFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<AddressFilterInput>;
  some?: InputMaybe<AddressFilterInput>;
};

export type ListFilterInputTypeOfApplicationUserFilterInput = {
  all?: InputMaybe<ApplicationUserFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ApplicationUserFilterInput>;
  some?: InputMaybe<ApplicationUserFilterInput>;
};

export type ListFilterInputTypeOfFriendFilterInput = {
  all?: InputMaybe<FriendFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<FriendFilterInput>;
  some?: InputMaybe<FriendFilterInput>;
};

export type ListFilterInputTypeOfListingFilterInput = {
  all?: InputMaybe<ListingFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ListingFilterInput>;
  some?: InputMaybe<ListingFilterInput>;
};

export type ListFilterInputTypeOfListingImageFilterInput = {
  all?: InputMaybe<ListingImageFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ListingImageFilterInput>;
  some?: InputMaybe<ListingImageFilterInput>;
};

export type ListFilterInputTypeOfMessageFilterInput = {
  all?: InputMaybe<MessageFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<MessageFilterInput>;
  some?: InputMaybe<MessageFilterInput>;
};

export type Listing = {
  __typename?: 'Listing';
  acceptsOffers: Scalars['Boolean']['output'];
  added: Scalars['DateTime']['output'];
  content: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  images: Array<ListingImage>;
  isPublished: Scalars['Boolean']['output'];
  isSold: Scalars['Boolean']['output'];
  msrp?: Maybe<Scalars['Int']['output']>;
  partNumber?: Maybe<Scalars['String']['output']>;
  price: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  type: ListingType;
  typeId: Scalars['String']['output'];
  unit: Scalars['String']['output'];
  updated: Scalars['DateTime']['output'];
  user?: Maybe<ApplicationUser>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ListingFilterInput = {
  acceptsOffers?: InputMaybe<BooleanOperationFilterInput>;
  added?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<ListingFilterInput>>;
  content?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  images?: InputMaybe<ListFilterInputTypeOfListingImageFilterInput>;
  isPublished?: InputMaybe<BooleanOperationFilterInput>;
  isSold?: InputMaybe<BooleanOperationFilterInput>;
  msrp?: InputMaybe<IntOperationFilterInput>;
  or?: InputMaybe<Array<ListingFilterInput>>;
  partNumber?: InputMaybe<StringOperationFilterInput>;
  price?: InputMaybe<IntOperationFilterInput>;
  quantity?: InputMaybe<IntOperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
  type?: InputMaybe<ListingTypeFilterInput>;
  typeId?: InputMaybe<StringOperationFilterInput>;
  unit?: InputMaybe<StringOperationFilterInput>;
  updated?: InputMaybe<DateTimeOperationFilterInput>;
  user?: InputMaybe<ApplicationUserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type ListingImage = {
  __typename?: 'ListingImage';
  added: Scalars['DateTime']['output'];
  definition: Array<Scalars['Byte']['output']>;
  id: Scalars['UUID']['output'];
  listing: Listing;
  listingId: Scalars['UUID']['output'];
  order: Scalars['Int']['output'];
  updated: Scalars['DateTime']['output'];
};

export type ListingImageFilterInput = {
  added?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<ListingImageFilterInput>>;
  definition?: InputMaybe<ListByteOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  listing?: InputMaybe<ListingFilterInput>;
  listingId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<ListingImageFilterInput>>;
  order?: InputMaybe<IntOperationFilterInput>;
  updated?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ListingType = {
  __typename?: 'ListingType';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ListingTypeFilterInput = {
  and?: InputMaybe<Array<ListingTypeFilterInput>>;
  id?: InputMaybe<StringOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ListingTypeFilterInput>>;
};

export type Message = {
  __typename?: 'Message';
  added: Scalars['DateTime']['output'];
  content: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  fromUser: ApplicationUser;
  fromUserId: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  subject: Scalars['String']['output'];
  toUser: ApplicationUser;
  toUserId: Scalars['String']['output'];
  updated: Scalars['DateTime']['output'];
};

export type MessageFilterInput = {
  added?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<MessageFilterInput>>;
  content?: InputMaybe<StringOperationFilterInput>;
  date?: InputMaybe<DateTimeOperationFilterInput>;
  fromUser?: InputMaybe<ApplicationUserFilterInput>;
  fromUserId?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<MessageFilterInput>>;
  subject?: InputMaybe<StringOperationFilterInput>;
  toUser?: InputMaybe<ApplicationUserFilterInput>;
  toUserId?: InputMaybe<StringOperationFilterInput>;
  updated?: InputMaybe<DateTimeOperationFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changeAccountPassword: Scalars['Boolean']['output'];
  changeUserPassword: Scalars['Boolean']['output'];
  currentAccountNotifications: AccountNotificationsEdit;
  currentAccountProfile: AccountProfileEdit;
  deleteUser: Scalars['Boolean']['output'];
  registerUser: Scalars['String']['output'];
  uploadCurrentProfileImage: Scalars['Boolean']['output'];
  uploadUserProfileImage: Scalars['Boolean']['output'];
  user: UserEdit;
  userList: UserListEdit;
  userNotifications: UserNotificationsEdit;
};


export type MutationChangeAccountPasswordArgs = {
  existingPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationChangeUserPasswordArgs = {
  existingPassword: Scalars['String']['input'];
  id: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationCurrentAccountNotificationsArgs = {
  notificationsEdit: AccountNotificationsEditInput;
};


export type MutationCurrentAccountProfileArgs = {
  profileEdit: AccountProfileEditInput;
};


export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationRegisterUserArgs = {
  user: RegisterUserEditInput;
};


export type MutationUploadCurrentProfileImageArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUploadUserProfileImageArgs = {
  file: Scalars['Upload']['input'];
  id: Scalars['String']['input'];
};


export type MutationUserArgs = {
  id: Scalars['String']['input'];
  profileEdit: UserEditInput;
};


export type MutationUserListArgs = {
  id: Scalars['String']['input'];
  profileEdit: UserListEditInput;
};


export type MutationUserNotificationsArgs = {
  id: Scalars['String']['input'];
  notificationsEdit: UserNotificationsEditInput;
};

export type Notice = {
  __typename?: 'Notice';
  added: Scalars['DateTime']['output'];
  content: Scalars['String']['output'];
  end?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  isActive: Scalars['Boolean']['output'];
  signature?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
};

/** A segment of a collection. */
export type OffsetUsersCollectionSegment = {
  __typename?: 'OffsetUsersCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<ApplicationUser>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PostalCode = {
  __typename?: 'PostalCode';
  city: Scalars['String']['output'];
  country?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  state: Scalars['String']['output'];
};

export type PostalCodeFilterInput = {
  and?: InputMaybe<Array<PostalCodeFilterInput>>;
  city?: InputMaybe<StringOperationFilterInput>;
  country?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<PostalCodeFilterInput>>;
  state?: InputMaybe<StringOperationFilterInput>;
};

export type Query = {
  __typename?: 'Query';
  assets: Array<Asset>;
  currentAccountNotifications: AccountNotificationsEdit;
  currentAccountProfile: AccountProfileEdit;
  currentAccountProfileImage?: Maybe<Array<Scalars['Byte']['output']>>;
  dashboardStatistics?: Maybe<DashboardStats>;
  notices: Array<Notice>;
  offsetUsers?: Maybe<OffsetUsersCollectionSegment>;
  totalUsers: Scalars['Int']['output'];
  userNotifications: UserNotificationsEdit;
  userProfile: UserEdit;
  userProfileImage?: Maybe<Array<Scalars['Byte']['output']>>;
  userSearch?: Maybe<UserSearchCollectionSegment>;
  users?: Maybe<UsersConnection>;
};


export type QueryOffsetUsersArgs = {
  order?: InputMaybe<Array<ApplicationUserSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ApplicationUserFilterInput>;
};


export type QueryUserNotificationsArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserProfileArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserProfileImageArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserSearchArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ApplicationUserSortInput>>;
  where?: InputMaybe<ApplicationUserFilterInput>;
};

export type RegisterUserEditInput = {
  about: Scalars['String']['input'];
  approved: Scalars['Boolean']['input'];
  businessName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  emailVerified: Scalars['Boolean']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  job?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneVerified: Scalars['Boolean']['input'];
  sellerApproved: Scalars['Boolean']['input'];
  sendEmailVerification: Scalars['Boolean']['input'];
  sendPhoneVerification: Scalars['Boolean']['input'];
  telegramUsername?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ncontains?: InputMaybe<Scalars['String']['input']>;
  nendsWith?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nstartsWith?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  test: Scalars['String']['output'];
};

export type UserEdit = {
  __typename?: 'UserEdit';
  about: Scalars['String']['output'];
  businessName?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  job?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  telegramUsername?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type UserEditInput = {
  about: Scalars['String']['input'];
  businessName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  job?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  telegramUsername?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
  website?: InputMaybe<Scalars['String']['input']>;
};

export type UserListEdit = {
  __typename?: 'UserListEdit';
  approved?: Maybe<Scalars['Boolean']['output']>;
  businessName?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  sellerApproved?: Maybe<Scalars['Boolean']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type UserListEditInput = {
  approved?: InputMaybe<Scalars['Boolean']['input']>;
  businessName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  sellerApproved?: InputMaybe<Scalars['Boolean']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UserNotificationsEdit = {
  __typename?: 'UserNotificationsEdit';
  id: Scalars['String']['output'];
  notifyOnMessage: Scalars['Boolean']['output'];
};

export type UserNotificationsEditInput = {
  id: Scalars['String']['input'];
  notifyOnMessage: Scalars['Boolean']['input'];
};

/** A segment of a collection. */
export type UserSearchCollectionSegment = {
  __typename?: 'UserSearchCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<ApplicationUser>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
};

/** A connection to a list of items. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges. */
  edges?: Maybe<Array<UsersEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ApplicationUser>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ApplicationUser;
};

export type UuidOperationFilterInput = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  gt?: InputMaybe<Scalars['UUID']['input']>;
  gte?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  lt?: InputMaybe<Scalars['UUID']['input']>;
  lte?: InputMaybe<Scalars['UUID']['input']>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
  ngt?: InputMaybe<Scalars['UUID']['input']>;
  ngte?: InputMaybe<Scalars['UUID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['UUID']['input']>>>;
  nlt?: InputMaybe<Scalars['UUID']['input']>;
  nlte?: InputMaybe<Scalars['UUID']['input']>;
};

export type AccountNotificationEditorFragment = { __typename?: 'AccountNotificationsEdit', id: string, notifyOnMessage: boolean } & { ' $fragmentName'?: 'AccountNotificationEditorFragment' };

export type AccountProfileEditorFragment = { __typename?: 'AccountProfileEdit', id: string, about: string, businessName?: string | null, email: string, firstName?: string | null, lastName?: string | null, job?: string | null, location?: string | null, phone?: string | null, telegramUsername?: string | null, username: string, website?: string | null } & { ' $fragmentName'?: 'AccountProfileEditorFragment' };

export type UserNotificationsEditorFragment = { __typename?: 'UserNotificationsEdit', id: string, notifyOnMessage: boolean } & { ' $fragmentName'?: 'UserNotificationsEditorFragment' };

export type UserEditorFragment = { __typename?: 'UserEdit', id: string, about: string, businessName?: string | null, email: string, firstName?: string | null, lastName?: string | null, job?: string | null, location?: string | null, phone?: string | null, telegramUsername?: string | null, username: string, website?: string | null } & { ' $fragmentName'?: 'UserEditorFragment' };

export type ChangeAccountPasswordMutationVariables = Exact<{
  existingPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type ChangeAccountPasswordMutation = { __typename?: 'Mutation', changeAccountPassword: boolean };

export type ChangeUserPasswordMutationVariables = Exact<{
  id: Scalars['String']['input'];
  existingPassword: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
}>;


export type ChangeUserPasswordMutation = { __typename?: 'Mutation', changeUserPassword: boolean };

export type UpdateCurrentAccountNotificationsMutationVariables = Exact<{
  notificationsEdit: AccountNotificationsEditInput;
}>;


export type UpdateCurrentAccountNotificationsMutation = { __typename?: 'Mutation', currentAccountNotifications: (
    { __typename?: 'AccountNotificationsEdit' }
    & { ' $fragmentRefs'?: { 'AccountNotificationEditorFragment': AccountNotificationEditorFragment } }
  ) };

export type UpdateCurrentAccountProfileMutationVariables = Exact<{
  profileEdit: AccountProfileEditInput;
}>;


export type UpdateCurrentAccountProfileMutation = { __typename?: 'Mutation', currentAccountProfile: (
    { __typename?: 'AccountProfileEdit' }
    & { ' $fragmentRefs'?: { 'AccountProfileEditorFragment': AccountProfileEditorFragment } }
  ) };

export type DeleteUserMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type RegisterUserMutationVariables = Exact<{
  user: RegisterUserEditInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: string };

export type UploadCurrentProfileImageMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type UploadCurrentProfileImageMutation = { __typename?: 'Mutation', uploadCurrentProfileImage: boolean };

export type UploadUserProfileImageMutationVariables = Exact<{
  id: Scalars['String']['input'];
  file: Scalars['Upload']['input'];
}>;


export type UploadUserProfileImageMutation = { __typename?: 'Mutation', uploadUserProfileImage: boolean };

export type UpdateUserListMutationVariables = Exact<{
  id: Scalars['String']['input'];
  profileEdit: UserListEditInput;
}>;


export type UpdateUserListMutation = { __typename?: 'Mutation', userList: { __typename?: 'UserListEdit', id: string, firstName?: string | null, lastName?: string | null, userName?: string | null, businessName?: string | null, approved?: boolean | null, sellerApproved?: boolean | null, email: string, phoneNumber?: string | null, location?: string | null } };

export type UpdateUserNotificationsMutationVariables = Exact<{
  id: Scalars['String']['input'];
  notificationsEdit: UserNotificationsEditInput;
}>;


export type UpdateUserNotificationsMutation = { __typename?: 'Mutation', userNotifications: (
    { __typename?: 'UserNotificationsEdit' }
    & { ' $fragmentRefs'?: { 'UserNotificationsEditorFragment': UserNotificationsEditorFragment } }
  ) };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String']['input'];
  profileEdit: UserEditInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', user: (
    { __typename?: 'UserEdit' }
    & { ' $fragmentRefs'?: { 'UserEditorFragment': UserEditorFragment } }
  ) };

export type CurrentAccountNotificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentAccountNotificationsQuery = { __typename?: 'Query', currentAccountNotifications: (
    { __typename?: 'AccountNotificationsEdit' }
    & { ' $fragmentRefs'?: { 'AccountNotificationEditorFragment': AccountNotificationEditorFragment } }
  ) };

export type CurrentAccountProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentAccountProfileQuery = { __typename?: 'Query', currentAccountProfileImage?: Array<any> | null, currentAccountProfile: (
    { __typename?: 'AccountProfileEdit' }
    & { ' $fragmentRefs'?: { 'AccountProfileEditorFragment': AccountProfileEditorFragment } }
  ) };

export type SocialUserFragment = { __typename: 'ApplicationUser', id: string, fullName: string, location?: string | null, telegramUsername?: string | null, email?: string | null, phoneNumber?: string | null, following: any, followers: any, listings: any, userName?: string | null } & { ' $fragmentName'?: 'SocialUserFragment' };

export type SocialUsersQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SocialUsersQuery = { __typename?: 'Query', totalUsers: number, offsetUsers?: { __typename?: 'OffsetUsersCollectionSegment', items?: Array<(
      { __typename?: 'ApplicationUser' }
      & { ' $fragmentRefs'?: { 'SocialUserFragment': SocialUserFragment } }
    )> | null } | null };

export type UserNotificationsQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type UserNotificationsQuery = { __typename?: 'Query', userNotifications: (
    { __typename?: 'UserNotificationsEdit' }
    & { ' $fragmentRefs'?: { 'UserNotificationsEditorFragment': UserNotificationsEditorFragment } }
  ) };

export type UserProfileQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type UserProfileQuery = { __typename?: 'Query', userProfileImage?: Array<any> | null, userProfile: (
    { __typename?: 'UserEdit' }
    & { ' $fragmentRefs'?: { 'UserEditorFragment': UserEditorFragment } }
  ) };

export type UserFragment = { __typename: 'ApplicationUser', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, userName?: string | null, businessName?: string | null, approved?: boolean | null, sellerApproved?: boolean | null, phoneNumber?: string | null, location?: string | null } & { ' $fragmentName'?: 'UserFragment' };

export type UsersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<ApplicationUserSortInput> | ApplicationUserSortInput>;
  where?: InputMaybe<ApplicationUserFilterInput>;
}>;


export type UsersQuery = { __typename?: 'Query', data?: { __typename?: 'UsersConnection', count: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, nodes?: Array<(
      { __typename?: 'ApplicationUser' }
      & { ' $fragmentRefs'?: { 'UserFragment': UserFragment } }
    )> | null } | null };

export const AccountNotificationEditorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountNotificationEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountNotificationsEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notifyOnMessage"}}]}}]} as unknown as DocumentNode<AccountNotificationEditorFragment, unknown>;
export const AccountProfileEditorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountProfileEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountProfileEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"job"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]} as unknown as DocumentNode<AccountProfileEditorFragment, unknown>;
export const UserNotificationsEditorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserNotificationsEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserNotificationsEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notifyOnMessage"}}]}}]} as unknown as DocumentNode<UserNotificationsEditorFragment, unknown>;
export const UserEditorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"job"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]} as unknown as DocumentNode<UserEditorFragment, unknown>;
export const SocialUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"following"}},{"kind":"Field","name":{"kind":"Name","value":"followers"}},{"kind":"Field","name":{"kind":"Name","value":"listings"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]} as unknown as DocumentNode<SocialUserFragment, unknown>;
export const UserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"sellerApproved"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"sellerApproved"}}]}}]} as unknown as DocumentNode<UserFragment, unknown>;
export const ChangeAccountPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeAccountPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"existingPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeAccountPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"existingPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"existingPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}]}]}}]} as unknown as DocumentNode<ChangeAccountPasswordMutation, ChangeAccountPasswordMutationVariables>;
export const ChangeUserPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeUserPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"existingPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeUserPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"existingPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"existingPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}]}]}}]} as unknown as DocumentNode<ChangeUserPasswordMutation, ChangeUserPasswordMutationVariables>;
export const UpdateCurrentAccountNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCurrentAccountNotifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notificationsEdit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountNotificationsEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentAccountNotifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"notificationsEdit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notificationsEdit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountNotificationEditor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountNotificationEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountNotificationsEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notifyOnMessage"}}]}}]} as unknown as DocumentNode<UpdateCurrentAccountNotificationsMutation, UpdateCurrentAccountNotificationsMutationVariables>;
export const UpdateCurrentAccountProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCurrentAccountProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileEdit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountProfileEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentAccountProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileEdit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileEdit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountProfileEditor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountProfileEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountProfileEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"job"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]} as unknown as DocumentNode<UpdateCurrentAccountProfileMutation, UpdateCurrentAccountProfileMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registerUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterUserEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}]}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const UploadCurrentProfileImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadCurrentProfileImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadCurrentProfileImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}]}]}}]} as unknown as DocumentNode<UploadCurrentProfileImageMutation, UploadCurrentProfileImageMutationVariables>;
export const UploadUserProfileImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadUserProfileImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadUserProfileImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}]}]}}]} as unknown as DocumentNode<UploadUserProfileImageMutation, UploadUserProfileImageMutationVariables>;
export const UpdateUserListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileEdit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserListEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"profileEdit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileEdit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"sellerApproved"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]} as unknown as DocumentNode<UpdateUserListMutation, UpdateUserListMutationVariables>;
export const UpdateUserNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserNotifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notificationsEdit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserNotificationsEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userNotifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"notificationsEdit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notificationsEdit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserNotificationsEditor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserNotificationsEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserNotificationsEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notifyOnMessage"}}]}}]} as unknown as DocumentNode<UpdateUserNotificationsMutation, UpdateUserNotificationsMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileEdit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"profileEdit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileEdit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserEditor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"job"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const CurrentAccountNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"currentAccountNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentAccountNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountNotificationEditor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountNotificationEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountNotificationsEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notifyOnMessage"}}]}}]} as unknown as DocumentNode<CurrentAccountNotificationsQuery, CurrentAccountNotificationsQueryVariables>;
export const CurrentAccountProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"currentAccountProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentAccountProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountProfileEditor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAccountProfileImage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountProfileEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountProfileEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"job"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]} as unknown as DocumentNode<CurrentAccountProfileQuery, CurrentAccountProfileQueryVariables>;
export const SocialUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"socialUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"21"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalUsers"}},{"kind":"Field","name":{"kind":"Name","value":"offsetUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialUser"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"following"}},{"kind":"Field","name":{"kind":"Name","value":"followers"}},{"kind":"Field","name":{"kind":"Name","value":"listings"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]} as unknown as DocumentNode<SocialUsersQuery, SocialUsersQueryVariables>;
export const UserNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userNotifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userNotifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserNotificationsEditor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserNotificationsEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserNotificationsEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notifyOnMessage"}}]}}]} as unknown as DocumentNode<UserNotificationsQuery, UserNotificationsQueryVariables>;
export const UserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserEditor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userProfileImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"job"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]} as unknown as DocumentNode<UserProfileQuery, UserProfileQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"50"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationUserSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationUserFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"count"},"name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"sellerApproved"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"sellerApproved"}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;