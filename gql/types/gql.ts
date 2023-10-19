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
    "\n  mutation Item($input: ItemInput!) {\n    item(input: $input) {\n      collections\n      id\n      createdAt\n      updatedAt\n      title\n    }\n  }\n": types.ItemDocument,
    "\n  query Items {\n    items {\n      rows {\n        id\n        url\n        imageUrl\n        title\n        note\n        personalRating\n        price\n        collections\n        currency\n        marketplace\n        updatedAt\n        createdAt\n        isPurchased\n        faviconUrl\n      }\n    }\n  }\n": types.ItemsDocument,
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
export function graphql(source: "\n  mutation Item($input: ItemInput!) {\n    item(input: $input) {\n      collections\n      id\n      createdAt\n      updatedAt\n      title\n    }\n  }\n"): (typeof documents)["\n  mutation Item($input: ItemInput!) {\n    item(input: $input) {\n      collections\n      id\n      createdAt\n      updatedAt\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Items {\n    items {\n      rows {\n        id\n        url\n        imageUrl\n        title\n        note\n        personalRating\n        price\n        collections\n        currency\n        marketplace\n        updatedAt\n        createdAt\n        isPurchased\n        faviconUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  query Items {\n    items {\n      rows {\n        id\n        url\n        imageUrl\n        title\n        note\n        personalRating\n        price\n        collections\n        currency\n        marketplace\n        updatedAt\n        createdAt\n        isPurchased\n        faviconUrl\n      }\n    }\n  }\n"];
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