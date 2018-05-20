import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/shared/Header';
import Hero from '../components/shared/Hero';

export const SpeakersPageTemplate = ({
    hero,
}) => (
    <section className="section section--gradient">
        <Header />
        <Hero
            title={hero.title}
            body={hero.body}
        />
    </section>
);

SpeakersPageTemplate.propTypes = {
    hero: PropTypes.shape({
        body: PropTypes.string,
        title: PropTypes.string,
    }),
};

const SpeakersPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <SpeakersPageTemplate
            hero={frontmatter.hero}
        />
    );
};

SpeakersPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default SpeakersPage;

export const speakersPageQuery = graphql`
    query SpeakersPage($id: String!) {
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
            }
        }
    }
`;
