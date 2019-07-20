import { graphql } from 'gatsby';

/**
 * Fragment for essential venue data
 */
export const venueFragment = graphql`
    fragment venueFragment on ContentfulVenue {
        id
        location {
            lat
            lon
        }
        name
        mapsLink
        postcode
        slug
        street
    }
`;
