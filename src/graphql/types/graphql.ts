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
  UUID: { input: any; output: any; }
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
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  job: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  location: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  telegramUsername: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
  website: Scalars['String']['output'];
};

export type AccountProfileEditInput = {
  about: Scalars['String']['input'];
  businessName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  job: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  telegramUsername: Scalars['String']['input'];
  username?: InputMaybe<Scalars['String']['input']>;
  website: Scalars['String']['input'];
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
  approved: Scalars['Boolean']['output'];
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
  fullName: Scalars['String']['output'];
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  job: Scalars['String']['output'];
  knownAs?: Maybe<Scalars['String']['output']>;
  knownAsResolved?: Maybe<Scalars['String']['output']>;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  listings: Array<Listing>;
  location: Scalars['String']['output'];
  lockoutEnabled: Scalars['Boolean']['output'];
  lockoutEnd?: Maybe<Scalars['DateTime']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
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
  sellerApproved: Scalars['Boolean']['output'];
  sellerApprovedBy?: Maybe<ApplicationUser>;
  sellerApprovedById?: Maybe<Scalars['String']['output']>;
  sellerApprovedUsers: Array<ApplicationUser>;
  sentMessages: Array<Message>;
  suffix?: Maybe<Scalars['String']['output']>;
  telegramUsername: Scalars['String']['output'];
  twoFactorEnabled: Scalars['Boolean']['output'];
  updated?: Maybe<Scalars['DateTime']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
  website: Scalars['String']['output'];
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
  currentAccountNotifications: AccountNotificationsEdit;
  currentAccountProfile: AccountProfileEdit;
  updateListing: Scalars['Boolean']['output'];
};


export type MutationCurrentAccountNotificationsArgs = {
  profileEdit: AccountNotificationsEditInput;
};


export type MutationCurrentAccountProfileArgs = {
  profileEdit: AccountProfileEditInput;
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
  dashboardStatistics?: Maybe<DashboardStats>;
  notices: Array<Notice>;
  userSearch?: Maybe<UserSearchCollectionSegment>;
  users?: Maybe<UsersConnection>;
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

export type CurrentAccountProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentAccountProfileQuery = { __typename?: 'Query', currentAccountProfile: { __typename?: 'AccountProfileEdit', id: string, about: string, businessName?: string | null, email?: string | null, firstName?: string | null, lastName?: string | null, job: string, location: string, phone?: string | null, telegramUsername: string, username?: string | null, website: string } };


export const CurrentAccountProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"currentAccountProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentAccountProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"job"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]}}]} as unknown as DocumentNode<CurrentAccountProfileQuery, CurrentAccountProfileQueryVariables>;