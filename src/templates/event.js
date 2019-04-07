import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import PropTypes from 'prop-types';
import React from 'react';

import Base from 'Components/views/Base';
import Page from 'Components/shared/Page';

import Footer from 'Components/shared/Footer';
import Header from 'Components/shared/Header';
import LayoutRoot from 'Components/shared/Layout/LayoutRoot';

import Wrapper from 'Components/shared/Wrapper';
import Link from 'Components/shared/Link';

import { H1, H2, H3 } from 'Components/shared/Heading';

import Title from 'Components/shared/Section/Title';

export const components = {
    a: props => <Link {...props} />,
    h1: props => <H1 {...props} />,
    h2: props => <H2 {...props} />,
    h3: props => <H3 {...props} />,
};

const EventsTemplate = ({ data: { contentfulEvent } }) => (
    <Base
        title={contentfulEvent.title}
    >
        <LayoutRoot>
            <Header activePage="events" />
            <Wrapper padded withResponsiveHeader>
                <Page breakWord>
                    <Title align="center">{contentfulEvent.title}</Title>
                    <h2>{contentfulEvent.speaker.name}</h2>
                    <h3>{contentfulEvent.eventDatePretty}{contentfulEvent.eventDate}</h3>

                    <MDXRenderer components={components}>
                        {contentfulEvent.description.childMdx.code.body}
                    </MDXRenderer>
                </Page>
            </Wrapper>
            <Footer />
        </LayoutRoot>
    </Base>
);

EventsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
    query eventsQuery($slug: String!) {
        contentfulEvent(slug: { eq: $slug }) {
            description {
                childMdx {
                    code {
                        body
                    }
                }
            }
            eventDatePretty: eventDate(formatString: "dddd DD MMMM YYYY")
            eventDate
            speaker {
                handle
                name
            }
            title
            titoId
            venue {
                location {
                    lat
                    lon
                }
                mapsLink
                name
                postcode
                street
            }
        }
    }
`;

export default EventsTemplate;
