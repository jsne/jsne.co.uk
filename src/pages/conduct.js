import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import GenericContent from 'Components/views/GenericContent';

const ContentPage = ({ data: { contentfulPage } }) => {
    const { title, introduction, body } = contentfulPage;

    return (
        <GenericContent title={title}>
            <div>{title}</div>
            <div>{introduction.introduction}</div>
            <div>{body.body}</div>
        </GenericContent>
    );
};

ContentPage.propTypes = {
    data: PropTypes.object,
};

export const pageQuery = graphql`
    query conductQuery {
        contentfulPage(slug: { eq: "/conduct" }) {
            title
            body {
                body
            }
            introduction {
                introduction
            }
        }
    }
`;

export default ContentPage;
