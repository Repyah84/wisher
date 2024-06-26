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

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
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

export type CategoryWithShops = {
  __typename?: 'CategoryWithShops';
  category?: Maybe<Category>;
  shops?: Maybe<Array<Maybe<Shop>>>;
};

export type CategoryWithShopsCount = {
  __typename?: 'CategoryWithShopsCount';
  category?: Maybe<Category>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type Collection = {
  __typename?: 'Collection';
  authorId: Scalars['ID']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDreamBoardEnabled?: Maybe<Scalars['Boolean']['output']>;
  isSharedByLink?: Maybe<Scalars['Boolean']['output']>;
  notifications?: Maybe<Array<Maybe<Notification>>>;
  sort?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
};

export type CollectionWithSortedWishes = {
  __typename?: 'CollectionWithSortedWishes';
  collection?: Maybe<Collection>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type CollectionsAndCountResponse = {
  __typename?: 'CollectionsAndCountResponse';
  count: Scalars['Int']['output'];
  rows: Array<Collection>;
};

export type CollectionsOptions = {
  collectionIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
  description?: Maybe<Scalars['String']['output']>;
  imagesUrls?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  isDreamBoardEnabled?: Maybe<Scalars['Boolean']['output']>;
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

export type DreamBoardCollection = {
  __typename?: 'DreamBoardCollection';
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  owner?: Maybe<DreamBordUserOwner>;
  title?: Maybe<Scalars['String']['output']>;
  wishes?: Maybe<Array<Maybe<DreamBordItem>>>;
};

export type DreamBordItem = {
  __typename?: 'DreamBordItem';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  faviconUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isPurchased?: Maybe<Scalars['Boolean']['output']>;
  marketplace?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  personalRating?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type DreamBordUserOwner = {
  __typename?: 'DreamBordUserOwner';
  birthday?: Maybe<Scalars['Date']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type GetContactPublicCollections = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  startAfterItemId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type Item = {
  __typename?: 'Item';
  collectionIds?: Maybe<Array<Scalars['String']['output']>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  faviconUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isHideWishFromSharedCollection?: Maybe<Scalars['Boolean']['output']>;
  isPurchased?: Maybe<Scalars['Boolean']['output']>;
  marketplace?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  notifications?: Maybe<Array<Maybe<Notification>>>;
  personalRating?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ItemInput = {
  collectionIds?: InputMaybe<Array<Scalars['String']['input']>>;
  currency?: InputMaybe<Scalars['String']['input']>;
  faviconUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  isHideWishFromSharedCollection?: InputMaybe<Scalars['Boolean']['input']>;
  isPurchased?: InputMaybe<Scalars['Boolean']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
  notifications?: InputMaybe<Array<InputMaybe<NotificationInput>>>;
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
  addToFav?: Maybe<Scalars['Boolean']['output']>;
  createTempToken?: Maybe<Scalars['String']['output']>;
  deleteItem?: Maybe<Status>;
  deleteOneSignal?: Maybe<Scalars['Boolean']['output']>;
  deleteUser?: Maybe<Status>;
  generatePublicId?: Maybe<Scalars['Boolean']['output']>;
  item?: Maybe<Item>;
  languages?: Maybe<Array<Maybe<Language>>>;
  markAllGiftIdeasCategoryAsRead?: Maybe<Scalars['Boolean']['output']>;
  readAllNotifications?: Maybe<Scalars['Boolean']['output']>;
  readNotification?: Maybe<Scalars['Boolean']['output']>;
  registerVisitLink?: Maybe<Scalars['Boolean']['output']>;
  removeFromFav?: Maybe<Scalars['Boolean']['output']>;
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


export type MutationAddToFavArgs = {
  shopId: Scalars['String']['input'];
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


export type MutationReadNotificationArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRegisterVisitLinkArgs = {
  input: RegisterVisitLink;
};


export type MutationRemoveFromFavArgs = {
  shopId: Scalars['String']['input'];
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

export type Notification = {
  __typename?: 'Notification';
  date?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  repeatability?: Maybe<NotificationDateRepeatabilityTypeEnum>;
  type?: Maybe<NotificationType>;
};

export enum NotificationDateRepeatabilityTypeEnum {
  Month = 'MONTH',
  None = 'NONE',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type NotificationInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  repeatability?: InputMaybe<NotificationDateRepeatabilityTypeEnum>;
  type?: InputMaybe<NotificationType>;
};

export type NotificationItem = {
  __typename?: 'NotificationItem';
  app_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isRead?: Maybe<Scalars['Boolean']['output']>;
  relatedEntity?: Maybe<RelatedEntity>;
  sentAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<NotificationType>;
};

export type NotificationItemsList = {
  __typename?: 'NotificationItemsList';
  count?: Maybe<Scalars['Int']['output']>;
  rows?: Maybe<Array<Maybe<NotificationItem>>>;
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

export enum NotificationType {
  Date = 'DATE'
}

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
  collectionWithSortedWishes?: Maybe<DreamBoardCollection>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  collectionsWithImages?: Maybe<Array<Maybe<CollectionsWithImages>>>;
  currencies?: Maybe<Array<Maybe<Currency>>>;
  getCategoriesWithShopCount?: Maybe<Array<Maybe<CategoryWithShopsCount>>>;
  getCategoryWithShops?: Maybe<CategoryWithShops>;
  getContactPublicCollections?: Maybe<ContactPublicCollectionList>;
  getFavShops?: Maybe<ShopWithCount>;
  getGiftIdeasCategory?: Maybe<Array<Maybe<CategoryInfo>>>;
  getGiftIdeasWishesByCategoryId?: Maybe<Array<Maybe<Wish>>>;
  getPopularGiftIdeas?: Maybe<Array<Maybe<MostPopularWishes>>>;
  getShops?: Maybe<ShopWithCount>;
  getUnreadNotifications?: Maybe<NotificationItemsList>;
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


export type QueryCollectionWithSortedWishesArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  options: CollectionsOptions;
};


export type QueryGetCategoryWithShopsArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetContactPublicCollectionsArgs = {
  input?: InputMaybe<GetContactPublicCollections>;
};


export type QueryGetFavShopsArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type QueryGetGiftIdeasCategoryArgs = {
  mainPageQuery?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetGiftIdeasWishesByCategoryIdArgs = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPopularGiftIdeasArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};


export type QueryGetShopsArgs = {
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUnreadNotificationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  startAfterItemId?: InputMaybe<Scalars['String']['input']>;
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
  collectionId?: InputMaybe<Scalars['String']['input']>;
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

export type RelatedEntity = {
  __typename?: 'RelatedEntity';
  collectionWithImages?: Maybe<CollectionsWithImages>;
  wish?: Maybe<Item>;
};

export type Shop = {
  __typename?: 'Shop';
  affiliateNetwork?: Maybe<Scalars['String']['output']>;
  domainUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  isFav?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  shopId?: Maybe<Scalars['String']['output']>;
  shopImgUrl?: Maybe<Scalars['String']['output']>;
};

export type ShopWithCount = {
  __typename?: 'ShopWithCount';
  count?: Maybe<Scalars['Int']['output']>;
  rows?: Maybe<Array<Maybe<Shop>>>;
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
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  isDreamBoardEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  isSharedByLink?: InputMaybe<Scalars['Boolean']['input']>;
  notifications?: InputMaybe<Array<InputMaybe<NotificationInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  birthday?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
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
  gender?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
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

export type CollectionsQueryVariables = Exact<{
  options: CollectionsOptions;
}>;


export type CollectionsQuery = { __typename?: 'Query', collections?: Array<{ __typename?: 'Collection', id: string, title: string, authorId: string } | null> | null };

export type CurrenciesQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrenciesQuery = { __typename?: 'Query', currencies?: Array<{ __typename?: 'Currency', code: string, name: string } | null> | null };

export type DeleteItemMutationVariables = Exact<{
  deleteItemId: Scalars['ID']['input'];
}>;


export type DeleteItemMutation = { __typename?: 'Mutation', deleteItem?: { __typename?: 'Status', status?: boolean | null } | null };

export type UpdateCollectionMutationVariables = Exact<{
  oldCollection: Scalars['String']['input'];
  newCollection: Scalars['String']['input'];
}>;


export type UpdateCollectionMutation = { __typename?: 'Mutation', renameCollection?: { __typename?: 'Status', status?: boolean | null } | null };

export type UserCollectionsAddMutationVariables = Exact<{
  input: UserInput;
}>;


export type UserCollectionsAddMutation = { __typename?: 'Mutation', user?: { __typename?: 'User', uid?: string | null } | null };

export type AddItemsToCollectionMutationVariables = Exact<{
  ids: Array<InputMaybe<Scalars['ID']['input']>> | InputMaybe<Scalars['ID']['input']>;
  collection: Scalars['String']['input'];
}>;


export type AddItemsToCollectionMutation = { __typename?: 'Mutation', addItemsToCollection?: { __typename?: 'Status', status?: boolean | null } | null };

export type ItemMutationVariables = Exact<{
  input: ItemInput;
  image?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type ItemMutation = { __typename?: 'Mutation', item?: { __typename?: 'Item', url?: string | null, updatedAt?: any | null, title?: string | null, price?: number | null, personalRating?: number | null, note?: string | null, marketplace?: string | null, imageUrl?: string | null, id?: string | null, collectionIds?: Array<string> | null, faviconUrl?: string | null, currency?: string | null, createdAt?: any | null, isPurchased?: boolean | null } | null };

export type DeleteUserMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'Status', status?: boolean | null } | null };

export type UserUpdateMutationVariables = Exact<{
  input: UserInput;
  image?: InputMaybe<Scalars['Upload']['input']>;
}>;


export type UserUpdateMutation = { __typename?: 'Mutation', user?: { __typename?: 'User', birthday?: any | null, email?: string | null, firstName?: string | null, imageUrl?: string | null, isHidden?: boolean | null, lastName?: string | null, uid?: string | null } | null };

export type ItemsQueryVariables = Exact<{
  collectionId?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  startAfterItemId?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Sort>;
}>;


export type ItemsQuery = { __typename?: 'Query', items?: { __typename?: 'listItem', count?: number | null, rows?: Array<{ __typename?: 'Item', url?: string | null, updatedAt?: any | null, title?: string | null, price?: number | null, personalRating?: number | null, note?: string | null, marketplace?: string | null, collectionIds?: Array<string> | null, imageUrl?: string | null, id?: string | null, faviconUrl?: string | null, currency?: string | null, createdAt?: any | null, isPurchased?: boolean | null } | null> | null } | null };

export type SearchItemsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchItemsQuery = { __typename?: 'Query', searchItems?: { __typename?: 'listItem', count?: number | null, rows?: Array<{ __typename?: 'Item', url?: string | null, updatedAt?: any | null, title?: string | null, price?: number | null, personalRating?: number | null, note?: string | null, marketplace?: string | null, imageUrl?: string | null, id?: string | null, collectionIds?: Array<string> | null, faviconUrl?: string | null, currency?: string | null, createdAt?: any | null, isPurchased?: boolean | null } | null> | null } | null };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', birthday?: any | null, email?: string | null, firstName?: string | null, imageUrl?: string | null, isHidden?: boolean | null, lastName?: string | null, uid?: string | null } | null };


export const CollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Collections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CollectionsOptions"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}}]}}]}}]} as unknown as DocumentNode<CollectionsQuery, CollectionsQueryVariables>;
export const CurrenciesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Currencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currencies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<CurrenciesQuery, CurrenciesQueryVariables>;
export const DeleteItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteItemId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteItemId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<DeleteItemMutation, DeleteItemMutationVariables>;
export const UpdateCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldCollection"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newCollection"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"renameCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oldCollection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldCollection"}}},{"kind":"Argument","name":{"kind":"Name","value":"newCollection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newCollection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UpdateCollectionMutation, UpdateCollectionMutationVariables>;
export const UserCollectionsAddDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserCollectionsAdd"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]} as unknown as DocumentNode<UserCollectionsAddMutation, UserCollectionsAddMutationVariables>;
export const AddItemsToCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddItemsToCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ids"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collection"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addItemsToCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ids"}}},{"kind":"Argument","name":{"kind":"Name","value":"collection"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<AddItemsToCollectionMutation, AddItemsToCollectionMutationVariables>;
export const ItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Item"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ItemInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"personalRating"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"marketplace"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collectionIds"}},{"kind":"Field","name":{"kind":"Name","value":"faviconUrl"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isPurchased"}}]}}]}}]} as unknown as DocumentNode<ItemMutation, ItemMutationVariables>;
export const DeleteUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<DeleteUserMutation, DeleteUserMutationVariables>;
export const UserUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]} as unknown as DocumentNode<UserUpdateMutation, UserUpdateMutationVariables>;
export const ItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Items"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startAfterItemId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"startAfterItemId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startAfterItemId"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"rows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"personalRating"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"marketplace"}},{"kind":"Field","name":{"kind":"Name","value":"collectionIds"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"faviconUrl"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isPurchased"}}]}}]}}]}}]} as unknown as DocumentNode<ItemsQuery, ItemsQueryVariables>;
export const SearchItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"rows"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"personalRating"}},{"kind":"Field","name":{"kind":"Name","value":"note"}},{"kind":"Field","name":{"kind":"Name","value":"marketplace"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"collectionIds"}},{"kind":"Field","name":{"kind":"Name","value":"faviconUrl"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"isPurchased"}}]}}]}}]}}]} as unknown as DocumentNode<SearchItemsQuery, SearchItemsQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"birthday"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isHidden"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;