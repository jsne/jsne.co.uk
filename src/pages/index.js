import React from 'react';

import IconText from '../components/shared/IconText';
import ClockIcon from '../components/shared/Icons/Clock';
import CalendarIcon from '../components/shared/Icons/Calendar';
import MapIcon from '../components/shared/Icons/Map';

import HomeHero from '../components/Home';
import { MailingListFormSection } from '../components/shared/MailingListForm';
import { MapSection } from '../components/shared/Map';

import config from '../config';

const venue = config.venues.jazzCafe;

const IndexPage = () => [
    <HomeHero
        key="hero"
        primary={{
            title: <div><span>JavaScript</span> North East</div>,
            text: 'We\'re an all things JavaScript meetup based in Newcastle. We meet every third Wednesday of the month.',
        }}
        secondary={{
            preTitle: 'Up next:',
            title: 'The Future of JavaScript',
            text: 'This month we welcome Craig Ayre to talk about \'The Future of JavaScript\'. We take a step back from the WASM hype and focus on JavaScript itself. He will show us how JavaScript could look in the future, how the TC39 proposal process works and the problems that come with this.',
            infos: [
                <IconText key="date" icon={<CalendarIcon />} iconSize="large" text={<span>20<sup>th</sup> June</span>} />,
                <IconText key="time" icon={<ClockIcon />} iconSize="large" text="6.00pm" />,
                <IconText key="venue" icon={<MapIcon />} iconSize="large" text="Jazz Cafe" to="#venue-map" underline />,
            ],
        }}
        eventInfo={{
            url: 'the-future-of-js',
        }}
    />,

    <MailingListFormSection key="MailingListFormSection" />,
    <MapSection
        key="MapSection"
        center={venue.location}
        markers={[{
            title: venue.name,
            text: (
                <div>
                    {venue.address.street} <br />
                    {venue.address.postcode}
                </div>
            ),
            lat: venue.location.lat,
            link: {
                href: venue.mapsLink,
                text: 'View on Google Maps',
            },
            lng: venue.location.lng,
        }]}
    />,
];

export default IndexPage;
