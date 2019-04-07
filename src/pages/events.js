import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

import Base from 'Components/views/Base';

import Card from 'Components/shared/Card';
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

const EventsPage = ({
    data: {
        events,
        page,
    },
    ...props
}) => {
    const parsedEvents = events.edges.map(({ node }) => ({
        ...node,
        qualifiedSlug: `/${page.slug}/${node.slug}`,
    }));

    return (
        <Base title={page.title} {...props}>
            <LayoutRoot>
                <Header activePage="/events" />
                <Hero
                    title="Past Events"
                    body="Past events..."
                />
                <Wrapper padded withResponsiveHeader>
                    {parsedEvents.map(event => (
                        <Card
                            key={event.id}
                            body={event.description.childMdx.code.body}
                            // ctaPrimary={{ label: 'Get tickets', to: '/Hello!' }}
                            ctaSecondary={{
                                label: 'More info',
                                to: event.qualifiedSlug,
                            }}
                            media="https://via.placeholder.com/480?text=Event"
                            person={{
                                name: event.speaker.name,
                                avatar: event.speaker.avatar.file.url,
                            }}
                            slug={event.qualifiedSlug}
                            title={event.title}
                        />
                    ))}
                </Wrapper>
                <Footer />
            </LayoutRoot>
        </Base>
    );
};

EventsPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
    query eventsIndexQuery {
        page: contentfulPage(slug: { eq: "events" }) {
            body {
                childMdx {
                    code {
                        body
                    }
                }
            }
            slug
            title
        }

        events: allContentfulEvent(sort: { fields: [eventDate], order: DESC }) {
            edges {
                node {
                    description {
                        childMdx {
                            code {
                                body
                            }
                        }
                    }
                    eventDate
                    focalImage {
                        file {
                            url
                        }
                    }
                    id
                    speaker {
                        avatar {
                            file {
                                url
                                fileName
                                contentType
                            }
                        }
                        handle
                        name
                    }
                    slug
                    titoId
                    title
                    year: eventDate(formatString:"YYYY")
                }
            }
        }
    }
`;

export default EventsPage;
