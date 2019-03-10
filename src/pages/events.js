import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

import Base from 'Components/views/Base';
import Page from 'Components/shared/Page';

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


const sortByYear = (a, b) => b.node.year - a.node.year;

const getEventsWithYearHeadings = (data) => {
    const sortedEventsByYear = data.sort(sortByYear);
    const eventsWithYearHeadings = [];
    let lastDate = null;

    sortedEventsByYear.forEach((eventNode) => {
        const showDate = lastDate !== eventNode.node.year;
        lastDate = eventNode.node.year;

        if (showDate) {
            eventsWithYearHeadings.push(<h2>{eventNode.node.year}</h2>);
        }

        eventsWithYearHeadings.push(<EventLink
            key={eventNode.node.titoId}
            title={eventNode.node.title}
            path={`events/${eventNode.node.titoId}`}
        />);
    });

    return eventsWithYearHeadings;
};

const EventsPage = ({ data: { allContentfulEvents: { edges } } }) => (

    <Base>
        <LayoutRoot>
            <Header activePage="/events" />
            <Hero
                title="Past Events"
                body="Past events..."
            />
            <Wrapper padded withResponsiveHeader>
                <Page breakWord>
                    {getEventsWithYearHeadings(edges)}
                </Page>
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
                    year: eventDate(formatString:"YYYY")
                    description {
                        description
                    }
                }
            }
        }
    }
`;
