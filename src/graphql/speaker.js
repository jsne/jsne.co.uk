import { graphql } from 'gatsby';

export const speakerFragment = graphql`
    fragment speakerFragment on ContentfulSpeaker {
        id
        name
        avatar {
            file {
                url
                contentType
            }
            title
        }
    }
`;
