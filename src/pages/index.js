import React from 'react';

import IconText from '../components/shared/IconText';
import ClockIcon from '../components/shared/Icons/Clock';
import CalendarIcon from '../components/shared/Icons/Calendar';
import MapIcon from '../components/shared/Icons/Map';

import HomeHero from '../components/Home';
import { MailingListFormSection } from '../components/shared/MailingListForm';
import { MapSection } from '../components/shared/Map';


const IndexPage = ({
    data: {
        allContentfulEvents: { edges: events },
        allContentfulVenue: { edges: venue },
    },
}) => {
    const eventInfo = events[0].node;
    const eventDate = new Date(eventInfo.eventDate).toDateString();
    const eventTime = new Date(eventInfo.eventDate).toLocaleTimeString('en-GB', { timeZone: 'UTC' });
    const venueInfo = venue[0].node;

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
                url: 'the-future-of-js',
            }}
        />,

        <MailingListFormSection key="MailingListFormSection" />,
        <MapSection
            key="MapSection"
            center={venueInfo.location}
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
    allContentfulEvents(limit:1, sort:{ fields: [eventDate] }) {
        edges {
            node {
                title,
                description { description },
                eventDate,
            }
        }
    }
}

`;
