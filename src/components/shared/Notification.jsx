/**
 * @module Notification
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

import container from 'Styles/container';
import * as theme from 'Styles/settings';

const NotificationContent = styled('h1')`
    flex-grow: 1;
    font-size: ${theme.fontSizes.normal};
    font-weight: normal;
`;

const NotificationCta = styled('a')`
    flex-shrink: 0;
    padding: ${theme.spacingUnits.half} ${theme.spacingUnits.whole};
    background-color: ${theme.colors.light};
    color: ${theme.colors.info};
    border-radius: ${theme.borders.radius};
`;

const NotificationInner = styled('div')`
    ${container}
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;

    @media(min-width: ${theme.breakpoints.low}) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const NotificationRoot = styled('section')`
    display: flex;
    flex-direciton: column;
    padding-top: ${theme.spacingUnits.half};
    padding-bottom: ${theme.spacingUnits.half};
    background-color: ${theme.colors.info};
    color: ${theme.colors.light};
`;

const Notification = ({
    content,
    cta,
    // icon, // @TODO
    ...props
}) => (
    <NotificationRoot {...props}>
        <NotificationInner>
            <NotificationContent dangerouslySetInnerHTML={{ __html: content }} /> {/* eslint-disable-line react/no-danger, max-len */}
            {cta && <NotificationCta href={cta.uri}>{cta.label}</NotificationCta>}
        </NotificationInner>
    </NotificationRoot>
);

Notification.propTypes = {
    content: PropTypes.string.isRequired,
    cta: PropTypes.object,
    // icon: PropTypes.string,
};

export default Notification;
