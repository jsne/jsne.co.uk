import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

import Base from 'Components/views/Base';

import Footer from 'Components/shared/Footer';
import Header from 'Components/shared/Header';
import LayoutRoot from 'Components/shared/Layout/LayoutRoot';

import Wrapper from 'Components/shared/Wrapper';
import Link from 'gatsby-link';

const StyledLink = styled(Link)`
    background-color: ${props => props.theme.color.uiPageBase};
    color: ${props => props.theme.color.uiPageContrastBase};
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
            <Wrapper padded withResponsiveHeader>
                <h2>Events:</h2>

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
