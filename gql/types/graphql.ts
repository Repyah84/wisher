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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  FloatOrBoolean: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type CategoryInfo = {
  __typename?: 'CategoryInfo';
  countInFavorite?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isNew?: Maybe<Scalars['Boolean']['output']>;
  isRead?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  wishes?: Maybe<Array<Maybe<Wish>>>;
};

export type Collection = {
  __typename?: 'Collection';
  authorId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  isSharedByLink?: Maybe<Scalars['Boolean']['output']>;
  sort?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
};

export type CollectionsAndCountResponse = {
  __typename?: 'CollectionsAndCountResponse';
  count: Scalars['Int']['output'];
  rows: Array<Collection>;
};

export type CollectionsWithImages = {
  __typename?: 'CollectionsWithImages';
  collection?: Maybe<Collection>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ContactPublicCollection = {
  __typename?: 'ContactPublicCollection';
  collectionId?: Maybe<Scalars['String']['output']>;
  collectionName?: Maybe<Scalars['String']['output']>;
  imagesUrls?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ContactPublicCollectionList = {
  __typename?: 'ContactPublicCollectionList';
  count?: Maybe<Scalars['Int']['output']>;
  rows?: Maybe<Array<Maybe<ContactPublicCollection>>>;
};

export type Currency = {
  __typename?: 'Currency';
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type GetContactPublicCollections = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  startAfterItemId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type Item = {
  __typename?: 'Item';
  collectionIds?: Maybe<Array<Scalars['String']['output']>>;
  collections?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  collectionsWithData?: Maybe<Array<Collection>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  faviconUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isHideWishFromSharedCollection?: Maybe<Scalars['Boolean']['output']>;
  isPurchased?: Maybe<Scalars['Boolean']['output']>;
  marketplace?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  personalRating?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ItemInput = {
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  faviconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isHideWishFromSharedCollection?: InputMaybe<Scalars['Boolean']['input']>;
  isPurchased?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  personalRating?: InputMaybe<Scalars['Float']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type LanguageInput = {
  code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type MostPopularWishes = {
  __typename?: 'MostPopularWishes';
  countInFavorite?: Maybe<Scalars['Int']['output']>;
  wishes?: Maybe<Array<Maybe<Wish>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addItemsToCollection?: Maybe<Status>;
  createTempToken?: Maybe<Scalars['String']['output']>;
  deleteItem?: Maybe<Status>;
  deleteOneSignal?: Maybe<Scalars['Boolean']['output']>;
  deleteUser?: Maybe<Status>;
  generatePublicId?: Maybe<Scalars['Boolean']['output']>;
  item?: Maybe<Item>;
  languages?: Maybe<Array<Maybe<Language>>>;
  markAllGiftIdeasCategoryAsRead?: Maybe<Scalars['Boolean']['output']>;
  registerVisitLink?: Maybe<Scalars['Boolean']['output']>;
  renameCollection?: Maybe<Status>;
  setOneSignal?: Maybe<Scalars['Boolean']['output']>;
  signIn?: Maybe<UserAndToken>;
  updateCollection?: Maybe<Collection>;
  user?: Maybe<User>;
};


export type MutationAddItemsToCollectionArgs = {
  collection: Scalars['String']['input'];
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDeleteItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteOneSignalArgs = {
  oneSignalSubscriptionId: Scalars['String']['input'];
};


export type MutationItemArgs = {
  giftCollectionId?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['Upload']['input']>;
  input: ItemInput;
};


export type MutationLanguagesArgs = {
  input: Array<InputMaybe<LanguageInput>>;
};


export type MutationRegisterVisitLinkArgs = {
  input: RegisterVisitLink;
};


export type MutationRenameCollectionArgs = {
  newCollection: Scalars['String']['input'];
  oldCollection: Scalars['String']['input'];
};


export type MutationSetOneSignalArgs = {
  oneSignalSubscriptionId: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  idToken: Scalars['String']['input'];
  tempToken?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCollectionArgs = {
  input?: InputMaybe<UpdateCollection>;
};


export type MutationUserArgs = {
  image?: InputMaybe<Scalars['Upload']['input']>;
  input: UserInput;
};

export type NotificationSetting = {
  __typename?: 'NotificationSetting';
  birthdayRemind?: Maybe<Scalars['Boolean']['output']>;
  newsAndUpdates?: Maybe<Scalars['Boolean']['output']>;
};

export type NotificationSettingInput = {
  birthdayRemind?: InputMaybe<Scalars['Boolean']['input']>;
  newsAndUpdates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Page = {
  __typename?: 'Page';
  content?: Maybe<Scalars['String']['output']>;
  id: PageEnum;
  title?: Maybe<Scalars['String']['output']>;
};

export enum PageEnum {
  Contacts = 'CONTACTS',
  Howto = 'HOWTO',
  Policy = 'POLICY',
  Terms = 'TERMS',
  Tips = 'TIPS'
}

export type Pagination = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  startAfterItemId?: InputMaybe<Scalars['String']['input']>;
};

export type PopularGiftWishesResponse = {
  __typename?: 'PopularGiftWishesResponse';
  count?: Maybe<Scalars['Int']['output']>;
  rows?: Maybe<Array<Maybe<Wish>>>;
};

export type Query = {
  __typename?: 'Query';
  collectionsWithImages?: Maybe<Array<Maybe<CollectionsWithImages>>>;
  currencies?: Maybe<Array<Maybe<Currency>>>;
  getContactPublicCollections?: Maybe<ContactPublicCollectionList>;
  getGiftIdeasCategory?: Maybe<Array<Maybe<CategoryInfo>>>;
  getGiftIdeasWishesByCategoryId?: Maybe<Array<Maybe<Wish>>>;
  getPopularGiftIdeas?: Maybe<Array<Maybe<MostPopularWishes>>>;
  getVisitedUsers?: Maybe<VisitedUsersListType>;
  getWishesFromUsers: WishesFromUsersResponse;
  hasNewGiftIdeasCategory?: Maybe<Scalars['Boolean']['output']>;
  item?: Maybe<Item>;
  itemPublicCollection?: Maybe<Item>;
  items?: Maybe<ListItem>;
  itemsPublicCollection?: Maybe<ListItem>;
  languages?: Maybe<Array<Maybe<Language>>>;
  link?: Maybe<Scalars['String']['output']>;
  page?: Maybe<Page>;
  searchItems?: Maybe<ListItem>;
  user?: Maybe<User>;
};


export type QueryCollectionsWithImagesArgs = {
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGetContactPublicCollectionsArgs = {
  input?: InputMaybe<GetContactPublicCollections>;
};


export type QueryGetGiftIdeasWishesByCategoryIdArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPopularGiftIdeasArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type QueryGetVisitedUsersArgs = {
  input?: InputMaybe<Pagination>;
};


export type QueryGetWishesFromUsersArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type QueryItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryItemPublicCollectionArgs = {
  id: Scalars['ID']['input'];
  publicCollectionId: Scalars['ID']['input'];
};


export type QueryItemsArgs = {
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Sort>;
  startAfterItemId?: InputMaybe<Scalars['String']['input']>;
  withoutIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryItemsPublicCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicCollectionId: Scalars['ID']['input'];
  sort?: InputMaybe<Sort>;
  startAfterItemId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLinkArgs = {
  name: Scalars['String']['input'];
};


export type QueryPageArgs = {
  id: PageEnum;
};


export type QuerySearchItemsArgs = {
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Sort>;
};

export type RegisterVisitLink = {
  collectionId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type Sort = {
  field?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<SortType>;
};

export enum SortType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Status = {
  __typename?: 'Status';
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UpdateCollection = {
  id: Scalars['String']['input'];
  isSharedByLink?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  birthday?: Maybe<Scalars['Date']['output']>;
  collections?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  collectionsWithData?: Maybe<CollectionsAndCountResponse>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  notificationSetting?: Maybe<NotificationSetting>;
  publicId?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['ID']['output']>;
};

export type UserAndToken = {
  __typename?: 'UserAndToken';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UserInput = {
  birthday?: InputMaybe<Scalars['Date']['input']>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  notificationSetting?: InputMaybe<NotificationSettingInput>;
};

export type VisitedUserType = {
  __typename?: 'VisitedUserType';
  collectionName?: Maybe<Scalars['String']['output']>;
  collectionsCount?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  userAvatarUrl?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type VisitedUsersListType = {
  __typename?: 'VisitedUsersListType';
  count?: Maybe<Scalars['Int']['output']>;
  rows?: Maybe<Array<Maybe<VisitedUserType>>>;
};

export type Wish = {
  __typename?: 'Wish';
  currency?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  oldPrice?: Maybe<Scalars['FloatOrBoolean']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type WishesFromUsersResponse = {
  __typename?: 'WishesFromUsersResponse';
  count?: Maybe<Scalars['Int']['output']>;
  items?: Maybe<Array<Maybe<Wish>>>;
};

export type ListItem = {
  __typename?: 'listItem';
  count?: Maybe<Scalars['Int']['output']>;
  rows?: Maybe<Array<Maybe<Item>>>;
};

export type ItemMutationVariables = Exact<{
  input: ItemInput;
}>;


export type ItemMutation = { __typename?: 'Mutation', item?: { __typename?: 'Item', collections?: Array<string | null> | null, id?: string | null, createdAt?: any | null, updatedAt?: any | null, title?: string | null } | null };

export type ItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type ItemsQuery = { __typename?: 'Query', items?: { __typename?: 'listItem', rows?: Array<{ __typename?: 'Item', id?: string | null, url?: string | null, imageUrl?: string | null, title?: string | null, note?: string | null, personalRating?: number | null, price?: number | null, collections?: Array<string | null> | null, currency?: string | null, marketplace?: string | null, updatedAt?: any | null, createdAt?: any | null, isPurchased?: boolean | null, faviconUrl?: string | null } | null> | null } | null };

export type SignInMutationVariables = Exact<{
  idToken: Scalars['String']['input'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn?: { __typename?: 'UserAndToken', token?: string | null } | null };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', birthday?: any | null, collections?: Array<string | null> | null, email?: string | null, firstName?: string | null, imageUrl?: string | null, isHidden?: boolean | null, lastName?: string | null, uid?: string | null } | null };


export const ItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Item"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ItemInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<ItemMutation, ItemMutationVariables>;
export const ItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"personalRating"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"collections"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"marketplace"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isPurchased"}},{"kind":"Field","name":{"kind":"Name","value":"faviconUrl"}}]}}]}}]}}]} as unknown as DocumentNode<ItemsQuery, ItemsQueryVariables>;
export const SignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"idToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<SignInMutation, SignInMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"collections"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;