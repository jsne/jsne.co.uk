import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

import Base from 'Components/views/Base';

import Footer from 'Components/shared/Footer';
import Header from 'Components/shared/Header';
import LayoutRoot from 'Components/shared/Layout/LayoutRoot';
import Hero from 'Components/shared/Hero';

import Wrapper from 'Components/shared/Wrapper';
import Link from 'gatsby-link';
import underlineImage from 'Assets/images/header-underline.svg';

const StyledLink = styled(Link)`
 ${props => props.theme.transition.call('color')}
    color: ${props => props.theme.color.uiSecondaryBase};

    &:hover,
    &:focus {
        color: ${props => props.theme.color.uiInfoBase};
    }

    background-image: url('${underlineImage}');
    background-size: 3rem .5rem;
    background-position: left bottom;
    background-repeat: repeat-x;
`;

const EventLink = ({ title, path }) => (
    <h3><StyledLink to={path}>{title}</StyledLink></h3>
);

EventLink.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

const EventsPage = ({ data }) => (
    <Base>

        <LayoutRoot>
            <Header activePage="/events" />
            <Hero
                title="Past Events"
                body="Past events..."
            />
            <Wrapper withResponsiveHeader>

                {data.allContentfulEvents.edges.map(edge => (
                    <EventLink
                        key={edge.node.titoId}
                        title={edge.node.title}
                        path={`events/${edge.node.titoId}`}
                    />
                ))}

            </Wrapper>
            <Footer />
        </LayoutRoot>
    </Base>
);

EventsPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default EventsPage;

export const pageQuery = graphql`
    query eventsListQuery {
        allContentfulEvents(sort: {fields: [eventDate], order: DESC}) {
            edges {
                node {
                    id
                    titoId
                    title
                    eventDate
                    description {
                        description
                    }
                }
            }
        }
    }
`;
