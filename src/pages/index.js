import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import React from 'react';

import { useEventQuerySingleLatestFormatted } from 'Graphql/event';

import { RootTemplate } from 'Templates/RootTemplate';
import { BannerNotification } from 'Components/shared/BannerNotification';
import { HomeHero } from 'Components/pages/Home/HomeHero';

const HomePage = ({ data: { contentfulNotifcation } }) => {
    const eventInfo = useEventQuerySingleLatestFormatted();
    // const { venue } = eventInfo;

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
                            <span>JavaScript</span> North East
                        </>
                    ),
                    text:
                        "We're an all things JavaScript meetup based in Newcastle. We meet every third Wednesday of the month.",
                }}
                sectionSecondary={{
                    preTitle: 'Up next:',
                    title: eventInfo.title,
                    text: eventInfo.description.description,
                    infos: [
                        // <IconText key="date" icon={<CalendarIcon />} iconSize="large" text={eventDateString} />,
                        // <IconText key="time" icon={<ClockIcon />} iconSize="large" text={eventTime} />,
                        // <IconText key="venue" icon={<MapIcon />} iconSize="large" text={venue.name} to="#venue-map" underline />,
                    ],
                    cta: {
                        to: eventInfo.titoId,
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
