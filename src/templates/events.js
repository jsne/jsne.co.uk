import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MDX from '@mdx-js/runtime/src/index';
import React from 'react';

import Base from 'Components/views/Base';

import Footer from 'Components/shared/Footer';
import Header from 'Components/shared/Header';
import LayoutRoot from 'Components/shared/Layout/LayoutRoot';

import Wrapper from 'Components/shared/Wrapper';
import Link from 'Components/shared/Link';

import { H1, H2, H3 } from 'Components/shared/Heading';

export const components = {
    a: props => <Link {...props} />,
    h1: props => <H1 {...props} />,
    h2: props => <H2 {...props} />,
    h3: props => <H3 {...props} />,
};

const EventsTemplate = (
    {
        data: {
            contentfulEvents: {
                title, eventDate, speaker, description: { description },
            },
        },
    },
) => (
    <Base>
        <LayoutRoot>
            <Header activePage="/events" />
            <Wrapper padded withResponsiveHeader>
                <h2>{title}</h2>
                <h3>{eventDate}</h3>
                <h3>{speaker.name}</h3>
                <MDX components={components}>{description}</MDX>
            </Wrapper>
            <Footer />
        </LayoutRoot>
    </Base>
);

EventsTemplate.propTypes = {
    data: PropTypes.object.isRequired,
};

export default EventsTemplate;

export const query = graphql`
    query eventsQuery($titoId: String!) {
        contentfulEvents(titoId: { eq: $titoId }) {
            title
            titoId
            eventDate (formatString:"MMMM Do, YYYY @ h:mm A")
            description {
                description
            }
            speaker { name }
        }
    }
`;
