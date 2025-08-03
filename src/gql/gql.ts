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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    query GetPageBySlug($slug: String) {\n        Page(slug: $slug) {\n            title\n            _id\n            content {\n                __typename\n                ... on Hero {\n                    ...Hero\n                }\n                ... on Feature {\n                    ...Feature\n                }\n            }\n        }\n    }\n": typeof types.GetPageBySlugDocument,
    "\n    fragment Feature on Feature {\n        _id\n        heading\n        sub_heading\n        button {\n            ...Button\n        }\n        _context {\n            variant_key\n        }\n        image_position\n        image {\n            url(width: 870, height: 570)\n        }\n    }\n": typeof types.FeatureFragmentDoc,
    "\n    fragment Hero on Hero {\n        _id\n        sub_heading\n        image {\n            url(preset: \"Hero\", width: 2000)\n            height\n            width\n        }\n        _context {\n            variant_key\n        }\n        heading\n        buttons {\n            ...Button\n        }\n    }\n": typeof types.HeroFragmentDoc,
    "\n    fragment Button on Button {\n        button_type\n        text\n        external_url\n        link {\n            ... on Category {\n                _slug\n            }\n            ... on Page {\n                _slug\n            }\n            ... on Post {\n                _slug\n            }\n        }\n    }\n": typeof types.ButtonFragmentDoc,
};
const documents: Documents = {
    "\n    query GetPageBySlug($slug: String) {\n        Page(slug: $slug) {\n            title\n            _id\n            content {\n                __typename\n                ... on Hero {\n                    ...Hero\n                }\n                ... on Feature {\n                    ...Feature\n                }\n            }\n        }\n    }\n": types.GetPageBySlugDocument,
    "\n    fragment Feature on Feature {\n        _id\n        heading\n        sub_heading\n        button {\n            ...Button\n        }\n        _context {\n            variant_key\n        }\n        image_position\n        image {\n            url(width: 870, height: 570)\n        }\n    }\n": types.FeatureFragmentDoc,
    "\n    fragment Hero on Hero {\n        _id\n        sub_heading\n        image {\n            url(preset: \"Hero\", width: 2000)\n            height\n            width\n        }\n        _context {\n            variant_key\n        }\n        heading\n        buttons {\n            ...Button\n        }\n    }\n": types.HeroFragmentDoc,
    "\n    fragment Button on Button {\n        button_type\n        text\n        external_url\n        link {\n            ... on Category {\n                _slug\n            }\n            ... on Page {\n                _slug\n            }\n            ... on Post {\n                _slug\n            }\n        }\n    }\n": types.ButtonFragmentDoc,
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
export function graphql(source: "\n    query GetPageBySlug($slug: String) {\n        Page(slug: $slug) {\n            title\n            _id\n            content {\n                __typename\n                ... on Hero {\n                    ...Hero\n                }\n                ... on Feature {\n                    ...Feature\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query GetPageBySlug($slug: String) {\n        Page(slug: $slug) {\n            title\n            _id\n            content {\n                __typename\n                ... on Hero {\n                    ...Hero\n                }\n                ... on Feature {\n                    ...Feature\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment Feature on Feature {\n        _id\n        heading\n        sub_heading\n        button {\n            ...Button\n        }\n        _context {\n            variant_key\n        }\n        image_position\n        image {\n            url(width: 870, height: 570)\n        }\n    }\n"): (typeof documents)["\n    fragment Feature on Feature {\n        _id\n        heading\n        sub_heading\n        button {\n            ...Button\n        }\n        _context {\n            variant_key\n        }\n        image_position\n        image {\n            url(width: 870, height: 570)\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment Hero on Hero {\n        _id\n        sub_heading\n        image {\n            url(preset: \"Hero\", width: 2000)\n            height\n            width\n        }\n        _context {\n            variant_key\n        }\n        heading\n        buttons {\n            ...Button\n        }\n    }\n"): (typeof documents)["\n    fragment Hero on Hero {\n        _id\n        sub_heading\n        image {\n            url(preset: \"Hero\", width: 2000)\n            height\n            width\n        }\n        _context {\n            variant_key\n        }\n        heading\n        buttons {\n            ...Button\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment Button on Button {\n        button_type\n        text\n        external_url\n        link {\n            ... on Category {\n                _slug\n            }\n            ... on Page {\n                _slug\n            }\n            ... on Post {\n                _slug\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment Button on Button {\n        button_type\n        text\n        external_url\n        link {\n            ... on Category {\n                _slug\n            }\n            ... on Page {\n                _slug\n            }\n            ... on Post {\n                _slug\n            }\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;