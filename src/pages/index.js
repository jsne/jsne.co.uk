import React from 'react';

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
        allContentfulVenue: { edges: venue },
    },
}) => {
    const eventInfo = events[0].node;
    const eventDate = new Date(eventInfo.eventDate).toDateString();
    const venueInfo = venue[0].node;
    const eventTime = new Date(eventInfo.eventDate).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC',
    });

    return [
        <HomeHero
            key="hero"
            primary={{
                title: <div><span>JavaScript</span> North East</div>,
                text: 'We\'re an all things JavaScript meetup based in Newcastle. We meet every third Wednesday of the month.',
            }}
            secondary={{
                preTitle: 'Up next:',
                title: eventInfo.title,
                text: eventInfo.description.description,
                infos: [
                    <IconText key="date" icon={<CalendarIcon />} iconSize="large" text={eventDate} />,
                    <IconText key="time" icon={<ClockIcon />} iconSize="large" text={eventTime} />,
                    <IconText key="venue" icon={<MapIcon />} iconSize="large" text={venueInfo.name} to="#venue-map" underline />,
                ],
            }}
            eventInfo={{
                url: eventInfo.titoId,
            }}
        />,

        <MailingListFormSection key="MailingListFormSection" />,
        <MapSection
            key="MapSection"
            center={{ lat: venueInfo.location.lat, lng: venueInfo.location.lon }}
            markers={[{
                title: venueInfo.name,
                text: (
                    <div>
                        {venueInfo.street} <br />
                        {venueInfo.postcode}
                    </div>
                ),
                lat: venueInfo.location.lat,
                link: {
                    href: venueInfo.mapsLink,
                    text: 'View on Google Maps',
                },
                lng: venueInfo.location.lon,
            }]}
        />,
    ];
};


export default IndexPage;

export const pageQuery = graphql`
query events {
    allContentfulVenue {
        edges {
            node {
                name
                street
                postcode
                location { lat lon }
                mapsLink
            }
        }
    }
    allContentfulEvents(limit:1, sort:{ fields: [eventDate], order: DESC }) {
        edges {
            node {
                title,
                description { description },
                eventDate,
                titoId
            }
        }
    }
}

`;
