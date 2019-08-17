import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';

import { useEventQuerySingleLatestFormatted } from 'Graphql/event';

import { RootTemplate } from 'Templates/RootTemplate';
import { BannerNotification } from 'Components/shared/BannerNotification';
import { TextIcon } from 'Components/shared/TextIcon';
import { HomeHero } from 'Components/pages/Home/HomeHero';

import IconCalander from 'Assets/images/icon-calendar-alt.svg';
import IconClock from 'Assets/images/icon-clock.svg';
import IconMap from 'Assets/images/icon-map-marker-alt.svg';

const HomePage = ({ data: { contentfulNotifcation } }) => {
    const event = useEventQuerySingleLatestFormatted();
    const { venue } = event;

    const eventDate = new Date(`${event.eventDate}Z`);
    const eventDateString = eventDate.toDateString();
    const eventMins =
        (eventDate.getUTCMinutes() < 10 ? '0' : '') + eventDate.getUTCMinutes();
    const eventTime = `${eventDate.getUTCHours()}:${eventMins}`;

    /* eslint-disable shopify/jsx-no-hardcoded-content */
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

            <HomeHero
                sectionPrimary={{
                    title: (
                        <>
                            <div>JavaScript</div> North East
                        </>
                    ),
                    text: (
                        <>
                            We&apos;re the all things JavaScript meetup based in
                            Newcastle.
                            <br /> We meet every third Wednesday of the month.
                        </>
                    ),
                }}
                sectionSecondary={{
                    preTitle: 'Up next:',
                    title: event.title,
                    to: event.path,
                    text: event.description.childMdx.body,
                    infos: [
                        <TextIcon
                            key="date"
                            as="time"
                            datetime={eventDateString}
                            icon={<IconCalander />}
                            text={eventDateString}
                        />,
                        <TextIcon
                            key="time"
                            icon={<IconClock />}
                            text={eventTime}
                        />,
                        <TextIcon
                            key="venue"
                            as="a"
                            color="brandPrimaryBase"
                            icon={<IconMap />}
                            text={venue.name}
                            href="#venue-map"
                        />,
                    ],
                    cta: {
                        to: event.titoId,
                        label: 'Get tickets',
                    },
                }}
            />
        </RootTemplate>
    );
    /* eslint-enable shopify/jsx-no-hardcoded-content */
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
    }
`;

export default HomePage;
