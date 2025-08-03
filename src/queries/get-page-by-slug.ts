import {graphql} from '@/gql'
 
// The GetPageBySlug query uses the input a slug parameter to retrieve a specific page
export const GET_PAGE_BY_SLUG = graphql(`
    query GetPageBySlug($slug: String) {
        Page(slug: $slug) {
            title
            _id
            content {
                __typename
                ... on Hero {
                    ...Hero
                }
                ... on Feature {
                    ...Feature
                }
            }
        }
    }
`)
 
// A fragment for the feature section
export const FEATURE_SECTION_FRAGMENT = graphql(`
    fragment Feature on Feature {
        _id
        heading
        sub_heading
        button {
            ...Button
        }
        _context {
            variant_key
        }
        image_position
        image {
            url(width: 870, height: 570)
        }
    }
`)
 
// A fragment for the hero section
export const HERO_SECTION_FRAGMENT = graphql(`
    fragment Hero on Hero {
        _id
        sub_heading
        image {
            url(preset: "Hero", width: 2000)
            height
            width
        }
        _context {
            variant_key
        }
        heading
        buttons {
            ...Button
        }
    }
`)
 
// A fragment for the button component
export const BUTTON_FRAGMENT = graphql(`
    fragment Button on Button {
        button_type
        text
        external_url
        link {
            ... on Category {
                _slug
            }
            ... on Page {
                _slug
            }
            ... on Post {
                _slug
            }
        }
    }
`)