import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import React from 'react';

import { Button } from 'Components/shared/Button';

const BannerNotificationRoot = styled.section`
    ${props => props.theme.color.getIntentPresetCss(props.intent)}
    display: grid;
    grid-auto-flow: column;
    grid-gap: ${props => props.theme.spacing.half};
    align-items: flex-start;
    padding: ${props =>
        `${props.theme.spacing.half} ${props.theme.spacing.base}`};

    ${props => props.theme.mediaQuery.low`
        grid-gap: ${props.theme.spacing.base};
    `}
`;

// const BannerNotificationIcon = styled.span``;

const BannerNotificationContent = styled.p``;

const BannerNotificationCta = styled(Button)`
    flex-grow: 1;
    background-color: ${props => props.theme.color.uiBodyBase};
    color: ${props => props.theme.color.uiBodyContrast};
`;

/**
 * Notification shown at top of page, cannot dismiss
 */
export const BannerNotification = ({
    content,
    cta,
    // icon,
    intent = 'neutral',
    ...props
}) => (
    <BannerNotificationRoot intent={intent} {...props}>
        {/* {icon && <BannerNotificationIcon icon={icon} />} */}
        <BannerNotificationContent
            dangerouslySetInnerHTML={{ __html: content }}
        />
        {cta && (
            <BannerNotificationCta intent={intent} href={cta.url}>
                {cta.label}
            </BannerNotificationCta>
        )}
    </BannerNotificationRoot>
);

BannerNotification.propTypes = {
    content: PropTypes.string.isRequired,
    cta: PropTypes.object,
    // icon: PropTypes.string,
    intent: PropTypes.oneOf(['good', 'bad', 'ugly', 'neutral']),
};
