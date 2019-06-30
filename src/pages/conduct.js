import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import ContentTemplate from 'Templates/ContentTemplate';

const ContentPage = ({ data: { contentfulPage } }) => {
    const {
        body, introduction, slug, title,
    } = contentfulPage;

    return (
        <ContentTemplate title={title} slug={slug}>
            {[
                introduction.introduction,
                body.body,
            ].join('\n')}
        </ContentTemplate>
    );
};

ContentPage.propTypes = {
    data: PropTypes.object,
};

export const pageQuery = graphql`
    query conductQuery {
        contentfulPage(slug: { eq: "conduct" }) {
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
