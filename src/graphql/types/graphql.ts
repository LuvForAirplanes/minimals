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
  /** The built-in `Decimal` scalar type. */
  Decimal: { input: any; output: any; }
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
  categories: Array<UserListingCategory>;
  church?: Maybe<Scalars['String']['output']>;
  churchGroup: Scalars['String']['output'];
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
  postResponses: Array<UserPostResponse>;
  posts: Array<UserPost>;
  prefix?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Array<Scalars['Byte']['output']>>;
  receivedMessages: Array<Message>;
  registered?: Maybe<Scalars['DateTime']['output']>;
  reviews: Array<ListingReview>;
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
  watchedItems: Array<UserListingWatch>;
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
  categories?: InputMaybe<ListFilterInputTypeOfUserListingCategoryFilterInput>;
  church?: InputMaybe<StringOperationFilterInput>;
  churchGroup?: InputMaybe<StringOperationFilterInput>;
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
  postResponses?: InputMaybe<ListFilterInputTypeOfUserPostResponseFilterInput>;
  posts?: InputMaybe<ListFilterInputTypeOfUserPostFilterInput>;
  prefix?: InputMaybe<StringOperationFilterInput>;
  profileImage?: InputMaybe<ListByteOperationFilterInput>;
  receivedMessages?: InputMaybe<ListFilterInputTypeOfMessageFilterInput>;
  registered?: InputMaybe<DateTimeOperationFilterInput>;
  reviews?: InputMaybe<ListFilterInputTypeOfListingReviewFilterInput>;
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
  watchedItems?: InputMaybe<ListFilterInputTypeOfUserListingWatchFilterInput>;
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
  church?: InputMaybe<SortEnumType>;
  churchGroup?: InputMaybe<SortEnumType>;
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

export type ChurchGroup = {
  __typename?: 'ChurchGroup';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type ChurchGroupSortInput = {
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
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

export type DecimalOperationFilterInput = {
  eq?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  neq?: InputMaybe<Scalars['Decimal']['input']>;
  ngt?: InputMaybe<Scalars['Decimal']['input']>;
  ngte?: InputMaybe<Scalars['Decimal']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Decimal']['input']>>>;
  nlt?: InputMaybe<Scalars['Decimal']['input']>;
  nlte?: InputMaybe<Scalars['Decimal']['input']>;
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

export type ListFilterInputTypeOfListingReviewFilterInput = {
  all?: InputMaybe<ListingReviewFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<ListingReviewFilterInput>;
  some?: InputMaybe<ListingReviewFilterInput>;
};

export type ListFilterInputTypeOfMessageFilterInput = {
  all?: InputMaybe<MessageFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<MessageFilterInput>;
  some?: InputMaybe<MessageFilterInput>;
};

export type ListFilterInputTypeOfUserListingCategoryFilterInput = {
  all?: InputMaybe<UserListingCategoryFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<UserListingCategoryFilterInput>;
  some?: InputMaybe<UserListingCategoryFilterInput>;
};

export type ListFilterInputTypeOfUserListingWatchFilterInput = {
  all?: InputMaybe<UserListingWatchFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<UserListingWatchFilterInput>;
  some?: InputMaybe<UserListingWatchFilterInput>;
};

export type ListFilterInputTypeOfUserPostFilterInput = {
  all?: InputMaybe<UserPostFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<UserPostFilterInput>;
  some?: InputMaybe<UserPostFilterInput>;
};

export type ListFilterInputTypeOfUserPostResponseFilterInput = {
  all?: InputMaybe<UserPostResponseFilterInput>;
  any?: InputMaybe<Scalars['Boolean']['input']>;
  none?: InputMaybe<UserPostResponseFilterInput>;
  some?: InputMaybe<UserPostResponseFilterInput>;
};

export type Listing = {
  __typename?: 'Listing';
  acceptsOffers: Scalars['Boolean']['output'];
  added: Scalars['DateTime']['output'];
  category?: Maybe<ListingCategory>;
  categoryId?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  dateSold?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['UUID']['output'];
  images: Array<ListingImage>;
  isPublished: Scalars['Boolean']['output'];
  mainImageId?: Maybe<Scalars['UUID']['output']>;
  msrp?: Maybe<Scalars['Decimal']['output']>;
  partNumber?: Maybe<Scalars['String']['output']>;
  price: Scalars['Decimal']['output'];
  quantity: Scalars['Int']['output'];
  ratings: Array<ListingRating>;
  ratingsAverage: Scalars['Decimal']['output'];
  reviews: Array<ListingReview>;
  serialNumber?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  totalReviews: Scalars['Int']['output'];
  type: ListingType;
  typeId: Scalars['String']['output'];
  unit: Scalars['String']['output'];
  updated: Scalars['DateTime']['output'];
  user?: Maybe<ApplicationUser>;
  userId?: Maybe<Scalars['String']['output']>;
  usersWatching: Array<UserListingWatch>;
  watched: Scalars['Boolean']['output'];
};

export type ListingAddEditInput = {
  acceptsOffers: Scalars['Boolean']['input'];
  categoryId: Scalars['String']['input'];
  content: Scalars['String']['input'];
  isPublished: Scalars['Boolean']['input'];
  msrp?: InputMaybe<Scalars['Decimal']['input']>;
  partNumber?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Decimal']['input'];
  quantity: Scalars['Int']['input'];
  serialNumber?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  unit: Scalars['String']['input'];
};

/** A connection to a list of items. */
export type ListingCategoriesConnection = {
  __typename?: 'ListingCategoriesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListingCategoriesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ListingCategory>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ListingCategoriesEdge = {
  __typename?: 'ListingCategoriesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ListingCategory;
};

export type ListingCategory = {
  __typename?: 'ListingCategory';
  added: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  listable: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<ListingCategory>;
  parentId?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
};

export type ListingCategoryEdit = {
  __typename?: 'ListingCategoryEdit';
  id: Scalars['String']['output'];
  listable: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
};

export type ListingCategoryEditInput = {
  id: Scalars['String']['input'];
  listable: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
};

export type ListingCategoryFilterInput = {
  added?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<ListingCategoryFilterInput>>;
  id?: InputMaybe<StringOperationFilterInput>;
  listable?: InputMaybe<BooleanOperationFilterInput>;
  name?: InputMaybe<StringOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<ListingCategoryFilterInput>>;
  parent?: InputMaybe<ListingCategoryFilterInput>;
  parentId?: InputMaybe<StringOperationFilterInput>;
  updated?: InputMaybe<DateTimeOperationFilterInput>;
};

export type ListingCategorySortInput = {
  added?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  listable?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
  notes?: InputMaybe<SortEnumType>;
  parent?: InputMaybe<ListingCategorySortInput>;
  parentId?: InputMaybe<SortEnumType>;
  updated?: InputMaybe<SortEnumType>;
};

export type ListingEdit = {
  __typename?: 'ListingEdit';
  acceptsOffers: Scalars['Boolean']['output'];
  categoryId?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  isPublished: Scalars['Boolean']['output'];
  msrp?: Maybe<Scalars['Decimal']['output']>;
  partNumber?: Maybe<Scalars['String']['output']>;
  price: Scalars['Decimal']['output'];
  quantity: Scalars['Int']['output'];
  serialNumber?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  unit: Scalars['String']['output'];
};

export type ListingEditInput = {
  acceptsOffers: Scalars['Boolean']['input'];
  categoryId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  id: Scalars['UUID']['input'];
  isPublished: Scalars['Boolean']['input'];
  msrp?: InputMaybe<Scalars['Decimal']['input']>;
  partNumber?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Decimal']['input'];
  quantity: Scalars['Int']['input'];
  serialNumber?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  unit: Scalars['String']['input'];
};

export type ListingFilterInput = {
  acceptsOffers?: InputMaybe<BooleanOperationFilterInput>;
  added?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<ListingFilterInput>>;
  category?: InputMaybe<ListingCategoryFilterInput>;
  categoryId?: InputMaybe<StringOperationFilterInput>;
  content?: InputMaybe<StringOperationFilterInput>;
  dateSold?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  images?: InputMaybe<ListFilterInputTypeOfListingImageFilterInput>;
  isPublished?: InputMaybe<BooleanOperationFilterInput>;
  msrp?: InputMaybe<DecimalOperationFilterInput>;
  or?: InputMaybe<Array<ListingFilterInput>>;
  partNumber?: InputMaybe<StringOperationFilterInput>;
  price?: InputMaybe<DecimalOperationFilterInput>;
  quantity?: InputMaybe<IntOperationFilterInput>;
  reviews?: InputMaybe<ListFilterInputTypeOfListingReviewFilterInput>;
  serialNumber?: InputMaybe<StringOperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
  type?: InputMaybe<ListingTypeFilterInput>;
  typeId?: InputMaybe<StringOperationFilterInput>;
  unit?: InputMaybe<StringOperationFilterInput>;
  updated?: InputMaybe<DateTimeOperationFilterInput>;
  user?: InputMaybe<ApplicationUserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
  usersWatching?: InputMaybe<ListFilterInputTypeOfUserListingWatchFilterInput>;
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

export type ListingListEdit = {
  __typename?: 'ListingListEdit';
  id: Scalars['UUID']['output'];
  isPublished: Scalars['Boolean']['output'];
  price: Scalars['Decimal']['output'];
  quantity: Scalars['Int']['output'];
};

export type ListingListEditInput = {
  id: Scalars['UUID']['input'];
  isPublished: Scalars['Boolean']['input'];
  price: Scalars['Decimal']['input'];
  quantity: Scalars['Int']['input'];
};

export type ListingRating = {
  __typename?: 'ListingRating';
  count: Scalars['Int']['output'];
  star: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type ListingReview = {
  __typename?: 'ListingReview';
  added: Scalars['DateTime']['output'];
  content: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  listing: Listing;
  listingId: Scalars['UUID']['output'];
  rating: Scalars['Decimal']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  user: ApplicationUser;
  userId: Scalars['String']['output'];
  verified: Scalars['Boolean']['output'];
};

export type ListingReviewEdit = {
  __typename?: 'ListingReviewEdit';
  content: Scalars['String']['output'];
  id?: Maybe<Scalars['UUID']['output']>;
  listingId: Scalars['UUID']['output'];
  rating: Scalars['Decimal']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ListingReviewEditInput = {
  content: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  listingId: Scalars['UUID']['input'];
  rating: Scalars['Decimal']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ListingReviewFilterInput = {
  added?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<ListingReviewFilterInput>>;
  content?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  listing?: InputMaybe<ListingFilterInput>;
  listingId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<ListingReviewFilterInput>>;
  rating?: InputMaybe<DecimalOperationFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
  updated?: InputMaybe<DateTimeOperationFilterInput>;
  user?: InputMaybe<ApplicationUserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
  verified?: InputMaybe<BooleanOperationFilterInput>;
};

export type ListingSortInput = {
  acceptsOffers?: InputMaybe<SortEnumType>;
  added?: InputMaybe<SortEnumType>;
  category?: InputMaybe<ListingCategorySortInput>;
  categoryId?: InputMaybe<SortEnumType>;
  content?: InputMaybe<SortEnumType>;
  dateSold?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  isPublished?: InputMaybe<SortEnumType>;
  msrp?: InputMaybe<SortEnumType>;
  partNumber?: InputMaybe<SortEnumType>;
  price?: InputMaybe<SortEnumType>;
  quantity?: InputMaybe<SortEnumType>;
  serialNumber?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
  type?: InputMaybe<ListingTypeSortInput>;
  typeId?: InputMaybe<SortEnumType>;
  unit?: InputMaybe<SortEnumType>;
  updated?: InputMaybe<SortEnumType>;
  user?: InputMaybe<ApplicationUserSortInput>;
  userId?: InputMaybe<SortEnumType>;
};

export type ListingStatistics = {
  __typename?: 'ListingStatistics';
  all: Scalars['Int']['output'];
  draft: Scalars['Int']['output'];
  published: Scalars['Int']['output'];
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

export type ListingTypeInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ListingTypeSortInput = {
  id?: InputMaybe<SortEnumType>;
  name?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type ListingTypesConnection = {
  __typename?: 'ListingTypesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListingTypesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<ListingType>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ListingTypesEdge = {
  __typename?: 'ListingTypesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ListingType;
};

/** A connection to a list of items. */
export type ListingsConnection = {
  __typename?: 'ListingsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<ListingsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Listing>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars['Int']['output'];
};

/** An edge in a connection. */
export type ListingsEdge = {
  __typename?: 'ListingsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Listing;
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
  addListing: Scalars['UUID']['output'];
  addListingCategory: ListingCategoryEdit;
  addListingType: ListingType;
  changeAccountPassword: Scalars['Boolean']['output'];
  changeUserPassword: Scalars['Boolean']['output'];
  currentAccountNotifications: AccountNotificationsEdit;
  currentAccountProfile: AccountProfileEdit;
  deleteListing: Scalars['Boolean']['output'];
  deleteListingCategory: Scalars['Boolean']['output'];
  deleteListingType: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  listing: ListingEdit;
  listingList: ListingListEdit;
  quickListing: QuickListingEdit;
  quickUser: QuickUserEdit;
  registerUser: Scalars['String']['output'];
  toggleWatch: Scalars['Boolean']['output'];
  updateListingCategory: ListingCategoryEdit;
  updateListingReview: ListingReviewEdit;
  updateListingType: ListingType;
  uploadCurrentBackgroundImage: Scalars['Boolean']['output'];
  uploadCurrentProfileImage: Scalars['Boolean']['output'];
  uploadUserBackgroundImage: Scalars['Boolean']['output'];
  uploadUserProfileImage: Scalars['Boolean']['output'];
  user: UserEdit;
  userList: UserListEdit;
  userNotifications: UserNotificationsEdit;
};


export type MutationAddListingArgs = {
  listing: ListingAddEditInput;
};


export type MutationAddListingCategoryArgs = {
  category: ListingCategoryEditInput;
};


export type MutationAddListingTypeArgs = {
  type: ListingTypeInput;
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


export type MutationDeleteListingArgs = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  ids?: InputMaybe<Array<Scalars['UUID']['input']>>;
};


export type MutationDeleteListingCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteListingTypeArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationListingArgs = {
  listing: ListingEditInput;
};


export type MutationListingListArgs = {
  listing: ListingListEditInput;
};


export type MutationQuickListingArgs = {
  listing: QuickListingEditInput;
};


export type MutationQuickUserArgs = {
  id: Scalars['String']['input'];
  profileEdit: QuickUserEditInput;
};


export type MutationRegisterUserArgs = {
  user: RegisterUserEditInput;
};


export type MutationToggleWatchArgs = {
  listingId: Scalars['UUID']['input'];
};


export type MutationUpdateListingCategoryArgs = {
  category: ListingCategoryEditInput;
};


export type MutationUpdateListingReviewArgs = {
  review: ListingReviewEditInput;
};


export type MutationUpdateListingTypeArgs = {
  type: ListingTypeInput;
};


export type MutationUploadCurrentBackgroundImageArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUploadCurrentProfileImageArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationUploadUserBackgroundImageArgs = {
  file: Scalars['Upload']['input'];
  id: Scalars['String']['input'];
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
  churchGroups: Array<ChurchGroup>;
  currentAccountNotifications: AccountNotificationsEdit;
  currentAccountProfile: AccountProfileEdit;
  currentAccountProfileImage?: Maybe<Array<Scalars['Byte']['output']>>;
  dashboardStatistics?: Maybe<DashboardStats>;
  listingCategories?: Maybe<ListingCategoriesConnection>;
  listingEdit: ListingEdit;
  listingStatistics: ListingStatistics;
  listingTypes?: Maybe<ListingTypesConnection>;
  listings?: Maybe<ListingsConnection>;
  myListingReview?: Maybe<ListingReviewEdit>;
  notices: Array<Notice>;
  offsetUsers?: Maybe<OffsetUsersCollectionSegment>;
  quickListing: QuickListingEdit;
  quickUserProfile: QuickUserEdit;
  totalUsers: Scalars['Int']['output'];
  userNotifications: UserNotificationsEdit;
  userProfile: UserEdit;
  userProfileImage?: Maybe<Array<Scalars['Byte']['output']>>;
  userSearch?: Maybe<UserSearchCollectionSegment>;
  userStatistics: UserStatistics;
  users?: Maybe<UsersConnection>;
};


export type QueryChurchGroupsArgs = {
  order?: InputMaybe<Array<ChurchGroupSortInput>>;
};


export type QueryListingCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ListingCategorySortInput>>;
  where?: InputMaybe<ListingCategoryFilterInput>;
};


export type QueryListingEditArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryListingTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ListingTypeSortInput>>;
  where?: InputMaybe<ListingTypeFilterInput>;
};


export type QueryListingsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Array<ListingSortInput>>;
  where?: InputMaybe<ListingFilterInput>;
};


export type QueryMyListingReviewArgs = {
  listingId: Scalars['UUID']['input'];
};


export type QueryOffsetUsersArgs = {
  order?: InputMaybe<Array<ApplicationUserSortInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ApplicationUserFilterInput>;
};


export type QueryQuickListingArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryQuickUserProfileArgs = {
  id: Scalars['String']['input'];
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

export type QuickListingEdit = {
  __typename?: 'QuickListingEdit';
  acceptsOffers: Scalars['Boolean']['output'];
  id: Scalars['UUID']['output'];
  isPublished: Scalars['Boolean']['output'];
  msrp?: Maybe<Scalars['Decimal']['output']>;
  partNumber?: Maybe<Scalars['String']['output']>;
  price: Scalars['Decimal']['output'];
  quantity: Scalars['Int']['output'];
  serialNumber?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  unit: Scalars['String']['output'];
};

export type QuickListingEditInput = {
  acceptsOffers: Scalars['Boolean']['input'];
  id: Scalars['UUID']['input'];
  isPublished: Scalars['Boolean']['input'];
  msrp?: InputMaybe<Scalars['Decimal']['input']>;
  partNumber?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Decimal']['input'];
  quantity: Scalars['Int']['input'];
  serialNumber?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  unit: Scalars['String']['input'];
};

export type QuickUserEdit = {
  __typename?: 'QuickUserEdit';
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

export type QuickUserEditInput = {
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
  approved: Scalars['Boolean']['output'];
  businessName?: Maybe<Scalars['String']['output']>;
  churchGroup: Scalars['String']['output'];
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  job?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phoneVerified: Scalars['Boolean']['output'];
  sellerApproved: Scalars['Boolean']['output'];
  telegramUsername?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type UserEditInput = {
  about: Scalars['String']['input'];
  approved: Scalars['Boolean']['input'];
  businessName?: InputMaybe<Scalars['String']['input']>;
  churchGroup: Scalars['String']['input'];
  email: Scalars['String']['input'];
  emailVerified: Scalars['Boolean']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  job?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneVerified: Scalars['Boolean']['input'];
  sellerApproved: Scalars['Boolean']['input'];
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

export type UserListingCategory = {
  __typename?: 'UserListingCategory';
  category: ListingCategory;
  categoryId: Scalars['String']['output'];
  user: ApplicationUser;
  userId: Scalars['String']['output'];
};

export type UserListingCategoryFilterInput = {
  and?: InputMaybe<Array<UserListingCategoryFilterInput>>;
  category?: InputMaybe<ListingCategoryFilterInput>;
  categoryId?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<UserListingCategoryFilterInput>>;
  user?: InputMaybe<ApplicationUserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type UserListingWatch = {
  __typename?: 'UserListingWatch';
  date: Scalars['DateTime']['output'];
  listing: Listing;
  listingId: Scalars['UUID']['output'];
  user: ApplicationUser;
  userId: Scalars['String']['output'];
};

export type UserListingWatchFilterInput = {
  and?: InputMaybe<Array<UserListingWatchFilterInput>>;
  date?: InputMaybe<DateTimeOperationFilterInput>;
  listing?: InputMaybe<ListingFilterInput>;
  listingId?: InputMaybe<UuidOperationFilterInput>;
  or?: InputMaybe<Array<UserListingWatchFilterInput>>;
  user?: InputMaybe<ApplicationUserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
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

export type UserPost = {
  __typename?: 'UserPost';
  added: Scalars['DateTime']['output'];
  content: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  media: Array<Scalars['Byte']['output']>;
  responses: Array<UserPostResponse>;
  title: Scalars['String']['output'];
  updated: Scalars['DateTime']['output'];
  user: ApplicationUser;
  userId: Scalars['String']['output'];
};

export type UserPostFilterInput = {
  added?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<UserPostFilterInput>>;
  content?: InputMaybe<StringOperationFilterInput>;
  date?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  media?: InputMaybe<ListByteOperationFilterInput>;
  or?: InputMaybe<Array<UserPostFilterInput>>;
  responses?: InputMaybe<ListFilterInputTypeOfUserPostResponseFilterInput>;
  title?: InputMaybe<StringOperationFilterInput>;
  updated?: InputMaybe<DateTimeOperationFilterInput>;
  user?: InputMaybe<ApplicationUserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

export type UserPostResponse = {
  __typename?: 'UserPostResponse';
  added: Scalars['DateTime']['output'];
  content: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['UUID']['output'];
  isReaction: Scalars['Boolean']['output'];
  post: UserPost;
  postId: Scalars['UUID']['output'];
  updated: Scalars['DateTime']['output'];
  user: ApplicationUser;
  userId: Scalars['String']['output'];
};

export type UserPostResponseFilterInput = {
  added?: InputMaybe<DateTimeOperationFilterInput>;
  and?: InputMaybe<Array<UserPostResponseFilterInput>>;
  content?: InputMaybe<StringOperationFilterInput>;
  date?: InputMaybe<DateTimeOperationFilterInput>;
  id?: InputMaybe<UuidOperationFilterInput>;
  isReaction?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<UserPostResponseFilterInput>>;
  post?: InputMaybe<UserPostFilterInput>;
  postId?: InputMaybe<UuidOperationFilterInput>;
  updated?: InputMaybe<DateTimeOperationFilterInput>;
  user?: InputMaybe<ApplicationUserFilterInput>;
  userId?: InputMaybe<StringOperationFilterInput>;
};

/** A segment of a collection. */
export type UserSearchCollectionSegment = {
  __typename?: 'UserSearchCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<ApplicationUser>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
};

export type UserStatistics = {
  __typename?: 'UserStatistics';
  all: Scalars['Int']['output'];
  approved: Scalars['Int']['output'];
  pending: Scalars['Int']['output'];
  rejected: Scalars['Int']['output'];
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

export type ListingFragment = { __typename: 'Listing', id: any, title: string, price: any, mainImageId?: any | null, acceptsOffers: boolean, quantity: number, msrp?: any | null, partNumber?: string | null, isPublished: boolean, added: any, updated: any, images: Array<{ __typename?: 'ListingImage', id: any }>, category?: { __typename?: 'ListingCategory', name: string } | null } & { ' $fragmentName'?: 'ListingFragment' };

export type ListingCategoryEditFragment = { __typename?: 'ListingCategoryEdit', id: string, name: string, parentId?: string | null, listable: boolean } & { ' $fragmentName'?: 'ListingCategoryEditFragment' };

export type ListingDetailsFragment = { __typename: 'Listing', id: any, title: string, price: any, mainImageId?: any | null, acceptsOffers: boolean, quantity: number, msrp?: any | null, partNumber?: string | null, isPublished: boolean, added: any, updated: any, content: string, watched: boolean, totalReviews: number, ratingsAverage: any, images: Array<{ __typename?: 'ListingImage', id: any }>, usersWatching: Array<{ __typename?: 'UserListingWatch', userId: string }>, category?: { __typename?: 'ListingCategory', id: string, name: string } | null, reviews: Array<(
    { __typename?: 'ListingReview' }
    & { ' $fragmentRefs'?: { 'ListingReviewFragment': ListingReviewFragment } }
  )>, ratings: Array<(
    { __typename?: 'ListingRating' }
    & { ' $fragmentRefs'?: { 'ListingRatingFragment': ListingRatingFragment } }
  )> } & { ' $fragmentName'?: 'ListingDetailsFragment' };

export type ListingEditFragment = { __typename?: 'ListingEdit', id: any, title: string, content: string, serialNumber?: string | null, partNumber?: string | null, quantity: number, categoryId?: string | null, unit: string, price: any, msrp?: any | null, isPublished: boolean, acceptsOffers: boolean } & { ' $fragmentName'?: 'ListingEditFragment' };

export type ListingListEditFragment = { __typename?: 'ListingListEdit', id: any, price: any, isPublished: boolean, quantity: number } & { ' $fragmentName'?: 'ListingListEditFragment' };

export type ListingRatingFragment = { __typename?: 'ListingRating', count: number, star: number, value: number } & { ' $fragmentName'?: 'ListingRatingFragment' };

export type ListingReviewFragment = { __typename: 'ListingReview', id: any, added: any, content: string, title?: string | null, rating: any, updated: any, verified: boolean, user: { __typename?: 'ApplicationUser', id: string, userName?: string | null } } & { ' $fragmentName'?: 'ListingReviewFragment' };

export type ListingReviewEditFragment = { __typename?: 'ListingReviewEdit', id?: any | null, listingId: any, title?: string | null, content: string, rating: any } & { ' $fragmentName'?: 'ListingReviewEditFragment' };

export type ListingTypeFragment = { __typename?: 'ListingType', id: string, name: string } & { ' $fragmentName'?: 'ListingTypeFragment' };

export type QuickListingEditFragment = { __typename?: 'QuickListingEdit', id: any, price: any, isPublished: boolean, quantity: number, title: string, serialNumber?: string | null, partNumber?: string | null, unit: string, msrp?: any | null, acceptsOffers: boolean } & { ' $fragmentName'?: 'QuickListingEditFragment' };

export type QuickUserEditorFragment = { __typename?: 'QuickUserEdit', id: string, about: string, businessName?: string | null, email: string, firstName?: string | null, lastName?: string | null, job?: string | null, location?: string | null, phone?: string | null, telegramUsername?: string | null, username: string, website?: string | null } & { ' $fragmentName'?: 'QuickUserEditorFragment' };

export type UserFragment = { __typename: 'ApplicationUser', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, userName?: string | null, businessName?: string | null, approved?: boolean | null, sellerApproved?: boolean | null, phoneNumber?: string | null, location?: string | null } & { ' $fragmentName'?: 'UserFragment' };

export type UserNotificationsEditorFragment = { __typename?: 'UserNotificationsEdit', id: string, notifyOnMessage: boolean } & { ' $fragmentName'?: 'UserNotificationsEditorFragment' };

export type UserEditorFragment = { __typename?: 'UserEdit', id: string, about: string, businessName?: string | null, email: string, firstName?: string | null, lastName?: string | null, job?: string | null, location?: string | null, phone?: string | null, telegramUsername?: string | null, username: string, website?: string | null, churchGroup: string, approved: boolean, sellerApproved: boolean, emailVerified: boolean, phoneVerified: boolean } & { ' $fragmentName'?: 'UserEditorFragment' };

export type AddListingMutationVariables = Exact<{
  listing: ListingAddEditInput;
}>;


export type AddListingMutation = { __typename?: 'Mutation', addListing: any };

export type AddListingCategoryMutationVariables = Exact<{
  category: ListingCategoryEditInput;
}>;


export type AddListingCategoryMutation = { __typename?: 'Mutation', addListingCategory: (
    { __typename?: 'ListingCategoryEdit' }
    & { ' $fragmentRefs'?: { 'ListingCategoryEditFragment': ListingCategoryEditFragment } }
  ) };

export type AddListingTypeMutationVariables = Exact<{
  type: ListingTypeInput;
}>;


export type AddListingTypeMutation = { __typename?: 'Mutation', addListingType: (
    { __typename?: 'ListingType' }
    & { ' $fragmentRefs'?: { 'ListingTypeFragment': ListingTypeFragment } }
  ) };

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

export type DeleteListingCategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteListingCategoryMutation = { __typename?: 'Mutation', deleteListingCategory: boolean };

export type DeleteListingTypeMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteListingTypeMutation = { __typename?: 'Mutation', deleteListingType: boolean };

export type DeleteListingMutationVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
  ids?: InputMaybe<Array<Scalars['UUID']['input']> | Scalars['UUID']['input']>;
}>;


export type DeleteListingMutation = { __typename?: 'Mutation', deleteListing: boolean };

export type DeleteUserMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type ListingListMutationVariables = Exact<{
  listing: ListingListEditInput;
}>;


export type ListingListMutation = { __typename?: 'Mutation', listingList: (
    { __typename?: 'ListingListEdit' }
    & { ' $fragmentRefs'?: { 'ListingListEditFragment': ListingListEditFragment } }
  ) };

export type QuickUserMutationVariables = Exact<{
  id: Scalars['String']['input'];
  profileEdit: QuickUserEditInput;
}>;


export type QuickUserMutation = { __typename?: 'Mutation', quickUser: (
    { __typename?: 'QuickUserEdit' }
    & { ' $fragmentRefs'?: { 'QuickUserEditorFragment': QuickUserEditorFragment } }
  ) };

export type RegisterUserMutationVariables = Exact<{
  user: RegisterUserEditInput;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', registerUser: string };

export type ToggleWatchMutationVariables = Exact<{
  listingId: Scalars['UUID']['input'];
}>;


export type ToggleWatchMutation = { __typename?: 'Mutation', toggleWatch: boolean };

export type UpdateListingMutationVariables = Exact<{
  listing: ListingEditInput;
}>;


export type UpdateListingMutation = { __typename?: 'Mutation', listing: (
    { __typename?: 'ListingEdit' }
    & { ' $fragmentRefs'?: { 'ListingEditFragment': ListingEditFragment } }
  ) };

export type UpdateListingCategoryMutationVariables = Exact<{
  category: ListingCategoryEditInput;
}>;


export type UpdateListingCategoryMutation = { __typename?: 'Mutation', updateListingCategory: (
    { __typename?: 'ListingCategoryEdit' }
    & { ' $fragmentRefs'?: { 'ListingCategoryEditFragment': ListingCategoryEditFragment } }
  ) };

export type UpdateListingReviewMutationVariables = Exact<{
  review: ListingReviewEditInput;
}>;


export type UpdateListingReviewMutation = { __typename?: 'Mutation', updateListingReview: (
    { __typename?: 'ListingReviewEdit' }
    & { ' $fragmentRefs'?: { 'ListingReviewEditFragment': ListingReviewEditFragment } }
  ) };

export type UpdateListingTypeMutationVariables = Exact<{
  type: ListingTypeInput;
}>;


export type UpdateListingTypeMutation = { __typename?: 'Mutation', updateListingType: (
    { __typename?: 'ListingType' }
    & { ' $fragmentRefs'?: { 'ListingTypeFragment': ListingTypeFragment } }
  ) };

export type UpdateQuickListingMutationVariables = Exact<{
  listing: QuickListingEditInput;
}>;


export type UpdateQuickListingMutation = { __typename?: 'Mutation', quickListing: (
    { __typename?: 'QuickListingEdit' }
    & { ' $fragmentRefs'?: { 'QuickListingEditFragment': QuickListingEditFragment } }
  ) };

export type UploadCurrentBackgroundImageMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type UploadCurrentBackgroundImageMutation = { __typename?: 'Mutation', uploadCurrentBackgroundImage: boolean };

export type UploadCurrentProfileImageMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
}>;


export type UploadCurrentProfileImageMutation = { __typename?: 'Mutation', uploadCurrentProfileImage: boolean };

export type UploadUserBackgroundImageMutationVariables = Exact<{
  id: Scalars['String']['input'];
  file: Scalars['Upload']['input'];
}>;


export type UploadUserBackgroundImageMutation = { __typename?: 'Mutation', uploadUserBackgroundImage: boolean };

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

export type UserMutationVariables = Exact<{
  id: Scalars['String']['input'];
  profileEdit: UserEditInput;
}>;


export type UserMutation = { __typename?: 'Mutation', user: (
    { __typename?: 'UserEdit' }
    & { ' $fragmentRefs'?: { 'UserEditorFragment': UserEditorFragment } }
  ) };

export type ChurchGroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type ChurchGroupsQuery = { __typename?: 'Query', churchGroups: Array<{ __typename?: 'ChurchGroup', id: string, name: string }> };

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

export type ListingDetailsQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type ListingDetailsQuery = { __typename?: 'Query', listings?: { __typename?: 'ListingsConnection', nodes?: Array<(
      { __typename?: 'Listing' }
      & { ' $fragmentRefs'?: { 'ListingDetailsFragment': ListingDetailsFragment } }
    )> | null } | null };

export type ListingCategoriesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<ListingCategorySortInput> | ListingCategorySortInput>;
  where?: InputMaybe<ListingCategoryFilterInput>;
}>;


export type ListingCategoriesQuery = { __typename?: 'Query', data?: { __typename?: 'ListingCategoriesConnection', count: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, nodes?: Array<{ __typename?: 'ListingCategory', id: string, name: string, parentId?: string | null, listable: boolean }> | null } | null };

export type ListingEditQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type ListingEditQuery = { __typename?: 'Query', listingEdit: (
    { __typename?: 'ListingEdit' }
    & { ' $fragmentRefs'?: { 'ListingEditFragment': ListingEditFragment } }
  ) };

export type ListingStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListingStatisticsQuery = { __typename?: 'Query', listingStatistics: { __typename?: 'ListingStatistics', all: number, published: number, draft: number } };

export type ListingTypesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<ListingTypeSortInput> | ListingTypeSortInput>;
  where?: InputMaybe<ListingTypeFilterInput>;
}>;


export type ListingTypesQuery = { __typename?: 'Query', data?: { __typename?: 'ListingTypesConnection', count: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, nodes?: Array<(
      { __typename?: 'ListingType' }
      & { ' $fragmentRefs'?: { 'ListingTypeFragment': ListingTypeFragment } }
    )> | null } | null };

export type ListingsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<ListingSortInput> | ListingSortInput>;
  where?: InputMaybe<ListingFilterInput>;
}>;


export type ListingsQuery = { __typename?: 'Query', data?: { __typename?: 'ListingsConnection', count: number, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: string | null }, nodes?: Array<(
      { __typename?: 'Listing' }
      & { ' $fragmentRefs'?: { 'ListingFragment': ListingFragment } }
    )> | null } | null };

export type MyListingReviewQueryVariables = Exact<{
  listingId: Scalars['UUID']['input'];
}>;


export type MyListingReviewQuery = { __typename?: 'Query', myListingReview?: (
    { __typename?: 'ListingReviewEdit' }
    & { ' $fragmentRefs'?: { 'ListingReviewEditFragment': ListingReviewEditFragment } }
  ) | null };

export type QuickListingQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type QuickListingQuery = { __typename?: 'Query', quickListing: (
    { __typename?: 'QuickListingEdit' }
    & { ' $fragmentRefs'?: { 'QuickListingEditFragment': QuickListingEditFragment } }
  ) };

export type QuickUserProfileQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type QuickUserProfileQuery = { __typename?: 'Query', quickUserProfile: (
    { __typename?: 'QuickUserEdit' }
    & { ' $fragmentRefs'?: { 'QuickUserEditorFragment': QuickUserEditorFragment } }
  ) };

export type SocialUserFragment = { __typename: 'ApplicationUser', id: string, fullName: string, firstName?: string | null, lastName?: string | null, location?: string | null, telegramUsername?: string | null, email?: string | null, phoneNumber?: string | null, following: any, followers: any, listings: any, userName?: string | null } & { ' $fragmentName'?: 'SocialUserFragment' };

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


export type UserProfileQuery = { __typename?: 'Query', userProfile: (
    { __typename?: 'UserEdit' }
    & { ' $fragmentRefs'?: { 'UserEditorFragment': UserEditorFragment } }
  ) };

export type UserStatisticsQueryVariables = Exact<{ [key: string]: never; }>;


export type UserStatisticsQuery = { __typename?: 'Query', userStatistics: { __typename?: 'UserStatistics', all: number, approved: number, pending: number, rejected: number } };

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
export const ListingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Listing"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Listing"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"mainImageId"}},{"kind":"Field","name":{"kind":"Name","value":"acceptsOffers"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"msrp"}},{"kind":"Field","name":{"kind":"Name","value":"partNumber"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"added"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ListingFragment, unknown>;
export const ListingCategoryEditFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingCategoryEdit"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingCategoryEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"listable"}}]}}]} as unknown as DocumentNode<ListingCategoryEditFragment, unknown>;
export const ListingReviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingReview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"added"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]}}]} as unknown as DocumentNode<ListingReviewFragment, unknown>;
export const ListingRatingFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingRating"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingRating"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"star"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<ListingRatingFragment, unknown>;
export const ListingDetailsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Listing"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"mainImageId"}},{"kind":"Field","name":{"kind":"Name","value":"acceptsOffers"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"msrp"}},{"kind":"Field","name":{"kind":"Name","value":"partNumber"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"added"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"watched"}},{"kind":"Field","name":{"kind":"Name","value":"totalReviews"}},{"kind":"Field","name":{"kind":"Name","value":"ratingsAverage"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersWatching"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListingReview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListingRating"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingReview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"added"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingRating"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingRating"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"star"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<ListingDetailsFragment, unknown>;
export const ListingEditFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingEdit"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"serialNumber"}},{"kind":"Field","name":{"kind":"Name","value":"partNumber"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"msrp"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"acceptsOffers"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<ListingEditFragment, unknown>;
export const ListingListEditFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingListEdit"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingListEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]} as unknown as DocumentNode<ListingListEditFragment, unknown>;
export const ListingReviewEditFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingReviewEdit"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingReviewEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listingId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]} as unknown as DocumentNode<ListingReviewEditFragment, unknown>;
export const ListingTypeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<ListingTypeFragment, unknown>;
export const QuickListingEditFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuickListingEdit"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuickListingEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"serialNumber"}},{"kind":"Field","name":{"kind":"Name","value":"partNumber"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"msrp"}},{"kind":"Field","name":{"kind":"Name","value":"acceptsOffers"}}]}}]} as unknown as DocumentNode<QuickListingEditFragment, unknown>;
export const QuickUserEditorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuickUserEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuickUserEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"job"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]} as unknown as DocumentNode<QuickUserEditorFragment, unknown>;
export const UserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"sellerApproved"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"sellerApproved"}}]}}]} as unknown as DocumentNode<UserFragment, unknown>;
export const UserNotificationsEditorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserNotificationsEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserNotificationsEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notifyOnMessage"}}]}}]} as unknown as DocumentNode<UserNotificationsEditorFragment, unknown>;
export const UserEditorFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"job"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"churchGroup"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"sellerApproved"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}}]}}]} as unknown as DocumentNode<UserEditorFragment, unknown>;
export const SocialUserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"following"}},{"kind":"Field","name":{"kind":"Name","value":"followers"}},{"kind":"Field","name":{"kind":"Name","value":"listings"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]} as unknown as DocumentNode<SocialUserFragment, unknown>;
export const AddListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listing"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingAddEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listing"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listing"}}}]}]}}]} as unknown as DocumentNode<AddListingMutation, AddListingMutationVariables>;
export const AddListingCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addListingCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingCategoryEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addListingCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListingCategoryEdit"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingCategoryEdit"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingCategoryEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"listable"}}]}}]} as unknown as DocumentNode<AddListingCategoryMutation, AddListingCategoryMutationVariables>;
export const AddListingTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addListingType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addListingType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListingType"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<AddListingTypeMutation, AddListingTypeMutationVariables>;
export const ChangeAccountPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeAccountPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"existingPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeAccountPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"existingPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"existingPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}]}]}}]} as unknown as DocumentNode<ChangeAccountPasswordMutation, ChangeAccountPasswordMutationVariables>;
export const ChangeUserPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeUserPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"existingPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeUserPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"existingPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"existingPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}}]}]}}]} as unknown as DocumentNode<ChangeUserPasswordMutation, ChangeUserPasswordMutationVariables>;
export const UpdateCurrentAccountNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCurrentAccountNotifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notificationsEdit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountNotificationsEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentAccountNotifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"notificationsEdit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notificationsEdit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountNotificationEditor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountNotificationEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountNotificationsEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notifyOnMessage"}}]}}]} as unknown as DocumentNode<UpdateCurrentAccountNotificationsMutation, UpdateCurrentAccountNotificationsMutationVariables>;
export const UpdateCurrentAccountProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCurrentAccountProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileEdit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountProfileEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentAccountProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"profileEdit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileEdit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountProfileEditor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountProfileEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountProfileEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"job"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]} as unknown as DocumentNode<UpdateCurrentAccountProfileMutation, UpdateCurrentAccountProfileMutationVariables>;
export const DeleteListingCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteListingCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteListingCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteListingCategoryMutation, DeleteListingCategoryMutationVariables>;
export const DeleteListingTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteListingType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteListingType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteListingTypeMutation, DeleteListingTypeMutationVariables>;
export const DeleteListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}]}}]} as unknown as DocumentNode<DeleteListingMutation, DeleteListingMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}}]}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const ListingListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"listingList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listing"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingListEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listingList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listing"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listing"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListingListEdit"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingListEdit"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingListEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}}]}}]} as unknown as DocumentNode<ListingListMutation, ListingListMutationVariables>;
export const QuickUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"quickUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileEdit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QuickUserEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quickUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"profileEdit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileEdit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuickUserEditor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuickUserEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuickUserEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"job"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]} as unknown as DocumentNode<QuickUserMutation, QuickUserMutationVariables>;
export const RegisterUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registerUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"user"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterUserEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"user"},"value":{"kind":"Variable","name":{"kind":"Name","value":"user"}}}]}]}}]} as unknown as DocumentNode<RegisterUserMutation, RegisterUserMutationVariables>;
export const ToggleWatchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"toggleWatch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleWatch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listingId"}}}]}]}}]} as unknown as DocumentNode<ToggleWatchMutation, ToggleWatchMutationVariables>;
export const UpdateListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listing"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listing"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listing"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListingEdit"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingEdit"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"serialNumber"}},{"kind":"Field","name":{"kind":"Name","value":"partNumber"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"msrp"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"acceptsOffers"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<UpdateListingMutation, UpdateListingMutationVariables>;
export const UpdateListingCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateListingCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingCategoryEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateListingCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListingCategoryEdit"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingCategoryEdit"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingCategoryEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"listable"}}]}}]} as unknown as DocumentNode<UpdateListingCategoryMutation, UpdateListingCategoryMutationVariables>;
export const UpdateListingReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateListingReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"review"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingReviewEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateListingReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"review"},"value":{"kind":"Variable","name":{"kind":"Name","value":"review"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListingReviewEdit"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingReviewEdit"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingReviewEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listingId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]} as unknown as DocumentNode<UpdateListingReviewMutation, UpdateListingReviewMutationVariables>;
export const UpdateListingTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateListingType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateListingType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListingType"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<UpdateListingTypeMutation, UpdateListingTypeMutationVariables>;
export const UpdateQuickListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateQuickListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listing"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QuickListingEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quickListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listing"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listing"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuickListingEdit"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuickListingEdit"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuickListingEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"serialNumber"}},{"kind":"Field","name":{"kind":"Name","value":"partNumber"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"msrp"}},{"kind":"Field","name":{"kind":"Name","value":"acceptsOffers"}}]}}]} as unknown as DocumentNode<UpdateQuickListingMutation, UpdateQuickListingMutationVariables>;
export const UploadCurrentBackgroundImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadCurrentBackgroundImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadCurrentBackgroundImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}]}]}}]} as unknown as DocumentNode<UploadCurrentBackgroundImageMutation, UploadCurrentBackgroundImageMutationVariables>;
export const UploadCurrentProfileImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadCurrentProfileImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadCurrentProfileImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}]}]}}]} as unknown as DocumentNode<UploadCurrentProfileImageMutation, UploadCurrentProfileImageMutationVariables>;
export const UploadUserBackgroundImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadUserBackgroundImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadUserBackgroundImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}]}]}}]} as unknown as DocumentNode<UploadUserBackgroundImageMutation, UploadUserBackgroundImageMutationVariables>;
export const UploadUserProfileImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"uploadUserProfileImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadUserProfileImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}]}]}}]} as unknown as DocumentNode<UploadUserProfileImageMutation, UploadUserProfileImageMutationVariables>;
export const UpdateUserListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileEdit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserListEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userList"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"profileEdit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileEdit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"sellerApproved"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]} as unknown as DocumentNode<UpdateUserListMutation, UpdateUserListMutationVariables>;
export const UpdateUserNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUserNotifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"notificationsEdit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserNotificationsEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userNotifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"notificationsEdit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"notificationsEdit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserNotificationsEditor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserNotificationsEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserNotificationsEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notifyOnMessage"}}]}}]} as unknown as DocumentNode<UpdateUserNotificationsMutation, UpdateUserNotificationsMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"user"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileEdit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserEditInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"profileEdit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileEdit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserEditor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"job"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"churchGroup"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"sellerApproved"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}}]}}]} as unknown as DocumentNode<UserMutation, UserMutationVariables>;
export const ChurchGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"churchGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"churchGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ChurchGroupsQuery, ChurchGroupsQueryVariables>;
export const CurrentAccountNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"currentAccountNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentAccountNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountNotificationEditor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountNotificationEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountNotificationsEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notifyOnMessage"}}]}}]} as unknown as DocumentNode<CurrentAccountNotificationsQuery, CurrentAccountNotificationsQueryVariables>;
export const CurrentAccountProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"currentAccountProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentAccountProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AccountProfileEditor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentAccountProfileImage"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AccountProfileEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AccountProfileEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"job"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]} as unknown as DocumentNode<CurrentAccountProfileQuery, CurrentAccountProfileQueryVariables>;
export const ListingDetailsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listingDetails"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListingDetails"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingReview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingReview"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"added"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingRating"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingRating"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"star"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingDetails"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Listing"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"mainImageId"}},{"kind":"Field","name":{"kind":"Name","value":"acceptsOffers"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"msrp"}},{"kind":"Field","name":{"kind":"Name","value":"partNumber"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"added"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"watched"}},{"kind":"Field","name":{"kind":"Name","value":"totalReviews"}},{"kind":"Field","name":{"kind":"Name","value":"ratingsAverage"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersWatching"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListingReview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListingRating"}}]}}]}}]} as unknown as DocumentNode<ListingDetailsQuery, ListingDetailsQueryVariables>;
export const ListingCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listingCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"50"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingCategorySortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingCategoryFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"listingCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"count"},"name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"listable"}}]}}]}}]}}]} as unknown as DocumentNode<ListingCategoriesQuery, ListingCategoriesQueryVariables>;
export const ListingEditDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listingEdit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listingEdit"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListingEdit"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingEdit"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"serialNumber"}},{"kind":"Field","name":{"kind":"Name","value":"partNumber"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"msrp"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"acceptsOffers"}},{"kind":"Field","name":{"kind":"Name","value":"categoryId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]} as unknown as DocumentNode<ListingEditQuery, ListingEditQueryVariables>;
export const ListingStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listingStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listingStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"all"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"draft"}}]}}]}}]} as unknown as DocumentNode<ListingStatisticsQuery, ListingStatisticsQueryVariables>;
export const ListingTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listingTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"50"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingTypeSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingTypeFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"listingTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"count"},"name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListingType"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingType"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<ListingTypesQuery, ListingTypesQueryVariables>;
export const ListingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"listings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ListingFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"listings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"count"},"name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Listing"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Listing"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Listing"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"mainImageId"}},{"kind":"Field","name":{"kind":"Name","value":"acceptsOffers"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"msrp"}},{"kind":"Field","name":{"kind":"Name","value":"partNumber"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"added"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ListingsQuery, ListingsQueryVariables>;
export const MyListingReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myListingReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"listingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myListingReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"listingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"listingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ListingReviewEdit"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ListingReviewEdit"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ListingReviewEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"listingId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]} as unknown as DocumentNode<MyListingReviewQuery, MyListingReviewQueryVariables>;
export const QuickListingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"quickListing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quickListing"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuickListingEdit"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuickListingEdit"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuickListingEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"serialNumber"}},{"kind":"Field","name":{"kind":"Name","value":"partNumber"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"msrp"}},{"kind":"Field","name":{"kind":"Name","value":"acceptsOffers"}}]}}]} as unknown as DocumentNode<QuickListingQuery, QuickListingQueryVariables>;
export const QuickUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"quickUserProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quickUserProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"QuickUserEditor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"QuickUserEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"QuickUserEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"job"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]} as unknown as DocumentNode<QuickUserProfileQuery, QuickUserProfileQueryVariables>;
export const SocialUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"socialUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"0"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"21"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalUsers"}},{"kind":"Field","name":{"kind":"Name","value":"offsetUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SocialUser"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SocialUser"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"following"}},{"kind":"Field","name":{"kind":"Name","value":"followers"}},{"kind":"Field","name":{"kind":"Name","value":"listings"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}}]}}]} as unknown as DocumentNode<SocialUsersQuery, SocialUsersQueryVariables>;
export const UserNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userNotifications"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userNotifications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserNotificationsEditor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserNotificationsEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserNotificationsEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"notifyOnMessage"}}]}}]} as unknown as DocumentNode<UserNotificationsQuery, UserNotificationsQueryVariables>;
export const UserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserEditor"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserEditor"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEdit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"job"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"telegramUsername"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"churchGroup"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"sellerApproved"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"phoneVerified"}}]}}]} as unknown as DocumentNode<UserProfileQuery, UserProfileQueryVariables>;
export const UserStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userStatistics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"all"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"pending"}},{"kind":"Field","name":{"kind":"Name","value":"rejected"}}]}}]}}]} as unknown as DocumentNode<UserStatisticsQuery, UserStatisticsQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"50"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationUserSortInput"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationUserFilterInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"data"},"name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"count"},"name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ApplicationUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"businessName"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"sellerApproved"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"approved"}},{"kind":"Field","name":{"kind":"Name","value":"sellerApproved"}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;