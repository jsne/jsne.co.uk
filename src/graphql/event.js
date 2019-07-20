import { graphql, useStaticQuery } from 'gatsby';

export const eventFragment = graphql`
    fragment eventFragment on ContentfulEvent {
        description {
            childMdx {
                code {
                    body
                    scope
                }
            }
        }
        eventDate
        id
        slug
        speaker {
            ...speakerFragment
        }
        title
        titoId
        venue {
            ...venueFragment
        }
    }
`;

/**
 * Essential data for Latest event
 * @NOTE Result will be `null` if latest event is in the past
 */
export const eventQuerySingleLatest = graphql`
    query eventQuerySingleLatest($date: Date) {
        contentfulEvent(eventDate: { gt: $date }) {
            ...eventFragment
        }
    }
`;

/**
 * Get list of edges from `eventQuerySingleLatest` with actual props we
 * want at top level
 * @return {Object}        - Formatted data
 */
export const useEventQuerySingleLatestFormatted = () => {
    const data = useStaticQuery(eventQuerySingleLatest);
    return data.contentfulEvent;
};
