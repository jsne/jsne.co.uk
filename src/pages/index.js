import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Base from 'Components/views/Base';
import ClockIcon from 'Components/shared/Icons/Clock';
import CalendarIcon from 'Components/shared/Icons/Calendar';
import IconText from 'Components/shared/IconText';
import { MailingListFormSection } from 'Components/shared/MailingListForm';
import MapIcon from 'Components/shared/Icons/Map';
import { MapSection } from 'Components/shared/Map';

import HomeHero from 'Components/Home';

const IndexPage = ({
    data: {
        allContentfulEvents: { edges: events },
    },
}) => {
    const eventInfo = events[0].node;
    const eventDate = new Date(`${eventInfo.eventDate}Z`);
    const eventDateString = eventDate.toDateString();

    const { venue } = eventInfo;

    const eventHours = eventDate.getUTCHours();
    const eventMins = (eventDate.getUTCMinutes() < 10 ? '0' : '') + eventDate.getMinutes();
    const eventTime = `${eventHours}:${eventMins}`;

    return (
        <Base
            title="Testaroo"
        >
            <HomeHero
                primary={{
                    title: (
                        <div>
                            <span>JavaScript</span> North East
                        </div>
                    ),
                    text: 'We\'re an all things JavaScript meetup based in Newcastle. We meet every third Wednesday of the month.',
                }}
                secondary={{
                    preTitle: 'Up next:',
                    title: eventInfo.title,
                    text: eventInfo.description.description,
                    infos: [
                        <IconText key="date" icon={<CalendarIcon />} iconSize="large" text={eventDateString} />,
                        <IconText key="time" icon={<ClockIcon />} iconSize="large" text={eventTime} />,
                        <IconText key="venue" icon={<MapIcon />} iconSize="large" text={venue.name} to="#venue-map" underline />,
                    ],
                }}
                eventInfo={{
                    url: eventInfo.titoId,
                }}
            />

            <MailingListFormSection />

            <MapSection
                center={{ lat: venue.location.lat, lng: venue.location.lon }}
                markers={[{
                    title: venue.name,
                    text: (
                        <div>
                            {venue.street}
                            <br />
                            {venue.postcode}
                        </div>
                    ),
                    lat: venue.location.lat,
                    link: {
                        href: venue.mapsLink,
                        text: 'View on Google Maps',
                    },
                    lng: venue.location.lon,
                }]}
            />
        </Base>
    );
};

IndexPage.propTypes = {
    data: PropTypes.object,
};

export const pageQuery = graphql`
    query events {
        allContentfulEvents(limit:1, sort:{ fields: [eventDate], order: DESC }) {
            edges {
                node {
                    title
                    description { description }
                    eventDate
                    titoId
                    venue {
                        name
                        street
                        postcode
                        location { lat lon }
                        mapsLink
                    }
                }
            }
        }
    }
`;

export default IndexPage;
