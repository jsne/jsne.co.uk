import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';

import { RootTemplate } from 'Templates/RootTemplate';
// import ClockIcon from 'Components/shared/Icons/Clock';
// import CalendarIcon from 'Components/shared/Icons/Calendar';
// import IconText from 'Components/shared/IconText';
// import { MailingListFormSection } from 'Components/shared/MailingListForm';
// import MapIcon from 'Components/shared/Icons/Map';
// import { MapSection } from 'Components/shared/Map';
import { BannerNotification } from 'Components/shared/BannerNotification';
import { HomeHero } from 'Components/pages/Home/HomeHero';

const HomePage = ({
    data: {
        allContentfulEvent: { edges: events },
        contentfulNotifcation,
    },
}) => {
    const eventInfo = events[0].node;
    const eventDate = new Date(`${eventInfo.eventDate}Z`);
    const eventDateString = eventDate.toDateString();

    const { venue } = eventInfo;

    const eventHours = eventDate.getUTCHours();
    const eventMins =
        (eventDate.getUTCMinutes() < 10 ? '0' : '') + eventDate.getMinutes();
    const eventTime = `${eventHours}:${eventMins}`;

    return (
        <RootTemplate>
            {contentfulNotifcation && (
                <BannerNotification
                    content={
                        contentfulNotifcation.text.content[0].content[0].value
                    }
                    cta={{
                        label: contentfulNotifcation.ctaLabel,
                        url: contentfulNotifcation.ctaUri,
                    }}
                    icon={contentfulNotifcation.icon}
                />
            )}
            {/* <HomeHero
                sectionPrimary={{
                    title: <><span>JavaScript</span> North East</>,
                    body: 'We\'re the all things JavaScript meetup based in Newcastle. We meet every third Wednesday of the month.',
                }}
                sectionSecondary={{
                    preTitle: 'Up next:',
                    title: eventInfo.title,
                    body: eventInfo.description.description,
                    infos: [
                        // <IconText key="date" icon={<CalendarIcon />} iconSize="large" text={eventDateString} />,
                        // <IconText key="time" icon={<ClockIcon />} iconSize="large" text={eventTime} />,
                        // <IconText key="venue" icon={<MapIcon />} iconSize="large" text={venue.name} to="#venue-map" underline />,
                    ],
                }}
                cta={{
                    label: 'Get tickets',
                    url: `https://ti.to/jsne/${eventInfo.titoId}`,
                }}
            /> */}
            {/* <Notification
                content={contentfulNotifcation.text.content[0].content[0].value}
                cta={{
                    label: contentfulNotifcation.ctaLabel,
                    uri: contentfulNotifcation.ctaUri,
                }}
                icon={contentfulNotifcation.icon}
            />
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
            /> */}
        </RootTemplate>
    );
};

HomePage.propTypes = {
    data: PropTypes.object,
};

export const pageQuery = graphql`
    query indexQuery {
        contentfulNotifcation(uid: { eq: "new-venue-black-swan" }) {
            text {
                content {
                    content {
                        value
                    }
                }
            }
            ctaLabel
            ctaUri
            icon
        }

        allContentfulEvent(
            limit: 1
            sort: { fields: [eventDate], order: DESC }
        ) {
            edges {
                node {
                    title
                    description {
                        description
                    }
                    eventDate
                    titoId
                    venue {
                        name
                        street
                        postcode
                        location {
                            lat
                            lon
                        }
                        mapsLink
                    }
                }
            }
        }
    }
`;

export default HomePage;
