import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Base from 'Components/views/Base';

import Footer from 'Components/shared/Footer';
import Header from 'Components/shared/Header';
import LayoutRoot from 'Components/shared/Layout/LayoutRoot';

import Wrapper from 'Components/shared/Wrapper';
import Card from 'Components/shared/Card';

const EventsPage = ({
    data: { allContentfulEvents: { edges: events } },
}) => {
    const eventContents = events.map((eventContent) => {
        const {
            title, eventDate, titoId, description,
        } = eventContent.node;
        return (
            <Card title={title} body={description.description} />

        );
    });

    return (
        <Base>
            <LayoutRoot>
                <Header activePage="/events" />
                <Wrapper padded withResponsiveHeader>
                    {eventContents}
                </Wrapper>
                <Footer />
            </LayoutRoot>
        </Base>
    );
};

EventsPage.propTypes = {
    data: PropTypes.object,
};

export const pageQuery = graphql`
    query eventsQuery {
        allContentfulEvents(sort:{ fields: [eventDate], order: DESC }) {
            edges {
                node {
                    id
                    title
                    description {
                        description
                    }
                    eventDate
                    titoId
                }
            }
        }
    }
`;

export default EventsPage;
