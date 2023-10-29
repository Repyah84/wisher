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
    "\n  query Currencies {\n    currencies {\n      code\n      name\n    }\n  }\n": types.CurrenciesDocument,
    "\n  mutation DeleteItem($deleteItemId: ID!) {\n    deleteItem(id: $deleteItemId) {\n      status\n    }\n  }\n": types.DeleteItemDocument,
    "\n  mutation UpdateCollection($oldCollection: String!, $newCollection: String!) {\n    renameCollection(\n      oldCollection: $oldCollection\n      newCollection: $newCollection\n    ) {\n      status\n    }\n  }\n": types.UpdateCollectionDocument,
    "\n  mutation UserCollectionsAdd($input: UserInput!) {\n    user(input: $input) {\n      uid\n      collections\n    }\n  }\n": types.UserCollectionsAddDocument,
    "\n  mutation AddItemsToCollection($ids: [ID]!, $collection: String!) {\n    addItemsToCollection(ids: $ids, collection: $collection) {\n      status\n    }\n  }\n": types.AddItemsToCollectionDocument,
    "\n  mutation Item($input: ItemInput!, $image: Upload) {\n    item(input: $input, image: $image) {\n      collections\n      id\n      createdAt\n      updatedAt\n      title\n    }\n  }\n": types.ItemDocument,
    "\n  query Items(\n    $limit: Int\n    $startAfterItemId: String\n    $sort: Sort\n    $collections: [String]\n  ) {\n    items(\n      limit: $limit\n      startAfterItemId: $startAfterItemId\n      sort: $sort\n      collections: $collections\n    ) {\n      count\n      rows {\n        url\n        updatedAt\n        title\n        price\n        personalRating\n        note\n        marketplace\n        imageUrl\n        id\n        faviconUrl\n        currency\n        createdAt\n        collections\n      }\n    }\n  }\n": types.ItemsDocument,
    "\n  mutation SignIn($idToken: String!) {\n    signIn(idToken: $idToken) {\n      token\n    }\n  }\n": types.SignInDocument,
    "\n  query User {\n    user {\n      birthday\n      collections\n      email\n      firstName\n      imageUrl\n      isHidden\n      lastName\n      uid\n    }\n  }\n": types.UserDocument,
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
export function graphql(source: "\n  query Currencies {\n    currencies {\n      code\n      name\n    }\n  }\n"): (typeof documents)["\n  query Currencies {\n    currencies {\n      code\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteItem($deleteItemId: ID!) {\n    deleteItem(id: $deleteItemId) {\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteItem($deleteItemId: ID!) {\n    deleteItem(id: $deleteItemId) {\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateCollection($oldCollection: String!, $newCollection: String!) {\n    renameCollection(\n      oldCollection: $oldCollection\n      newCollection: $newCollection\n    ) {\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateCollection($oldCollection: String!, $newCollection: String!) {\n    renameCollection(\n      oldCollection: $oldCollection\n      newCollection: $newCollection\n    ) {\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UserCollectionsAdd($input: UserInput!) {\n    user(input: $input) {\n      uid\n      collections\n    }\n  }\n"): (typeof documents)["\n  mutation UserCollectionsAdd($input: UserInput!) {\n    user(input: $input) {\n      uid\n      collections\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddItemsToCollection($ids: [ID]!, $collection: String!) {\n    addItemsToCollection(ids: $ids, collection: $collection) {\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation AddItemsToCollection($ids: [ID]!, $collection: String!) {\n    addItemsToCollection(ids: $ids, collection: $collection) {\n      status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Item($input: ItemInput!, $image: Upload) {\n    item(input: $input, image: $image) {\n      collections\n      id\n      createdAt\n      updatedAt\n      title\n    }\n  }\n"): (typeof documents)["\n  mutation Item($input: ItemInput!, $image: Upload) {\n    item(input: $input, image: $image) {\n      collections\n      id\n      createdAt\n      updatedAt\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Items(\n    $limit: Int\n    $startAfterItemId: String\n    $sort: Sort\n    $collections: [String]\n  ) {\n    items(\n      limit: $limit\n      startAfterItemId: $startAfterItemId\n      sort: $sort\n      collections: $collections\n    ) {\n      count\n      rows {\n        url\n        updatedAt\n        title\n        price\n        personalRating\n        note\n        marketplace\n        imageUrl\n        id\n        faviconUrl\n        currency\n        createdAt\n        collections\n      }\n    }\n  }\n"): (typeof documents)["\n  query Items(\n    $limit: Int\n    $startAfterItemId: String\n    $sort: Sort\n    $collections: [String]\n  ) {\n    items(\n      limit: $limit\n      startAfterItemId: $startAfterItemId\n      sort: $sort\n      collections: $collections\n    ) {\n      count\n      rows {\n        url\n        updatedAt\n        title\n        price\n        personalRating\n        note\n        marketplace\n        imageUrl\n        id\n        faviconUrl\n        currency\n        createdAt\n        collections\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignIn($idToken: String!) {\n    signIn(idToken: $idToken) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation SignIn($idToken: String!) {\n    signIn(idToken: $idToken) {\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query User {\n    user {\n      birthday\n      collections\n      email\n      firstName\n      imageUrl\n      isHidden\n      lastName\n      uid\n    }\n  }\n"): (typeof documents)["\n  query User {\n    user {\n      birthday\n      collections\n      email\n      firstName\n      imageUrl\n      isHidden\n      lastName\n      uid\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;