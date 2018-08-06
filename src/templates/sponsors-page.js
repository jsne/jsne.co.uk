import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/shared/Header';
import Hero from '../components/shared/Hero';

export const SponsorsPageTemplate = ({
    hero,
    main,
}) => [
    <section className="section section--gradient">
        <Header />
        <Hero
            title={hero.title}
            body={hero.body}
        />
    </section>,
    <p>{main}</p>,

];

SponsorsPageTemplate.propTypes = {
    hero: PropTypes.shape({
        body: PropTypes.string,
        title: PropTypes.string,
    }),
    main: PropTypes.array,
};

const SponsorsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <SponsorsPageTemplate
            hero={frontmatter.hero}
            main={frontmatter.main}
        />
    );
};

SponsorsPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),

    }),
};

export default SponsorsPage;

export const sponsorsPageQuery = graphql`
    query SponsorsPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                image
                heading
                description
                hero {
                    title
                    body
                }
                main
            }
        }
    }
`;
