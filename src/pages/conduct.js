import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import GenericContent from 'Components/views/GenericContent';

const ContentPage = ({ data: { contentfulPage } }) => {
    const {
        body, introduction, slug, title,
    } = contentfulPage;

    return (
        <GenericContent title={title} slug={slug}>
            {[
                introduction.introduction,
                body.body,
            ].join('\n')}
        </GenericContent>
    );
};

ContentPage.propTypes = {
    data: PropTypes.object,
};

export const pageQuery = graphql`
    query conductQuery {
        contentfulPage(slug: { eq: "/conduct" }) {
            slug
            title
            introduction {
                introduction
            }
            body {
                body
            }
        }
    }
`;

export default ContentPage;
