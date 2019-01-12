import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Base from 'Components/views/Base';

const ContentPage = ({
    data: {
        contentfulPage
    },
}) => {

    const { title, introduction, body } = contentfulPage;

    return (
        <Base>
            <div>{title}</div>
            <div>{introduction.introduction}</div>
            <div>{body.body}</div>
        </Base>
    );
};

ContentPage.propTypes = {
    data: PropTypes.object,
};

export const pageQuery = graphql`
    query conductQuery {
        contentfulPage(slug: {eq: "/conduct"}) {
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
