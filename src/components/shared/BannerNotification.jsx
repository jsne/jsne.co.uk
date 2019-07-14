import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import React from 'react';

import { Wrapper } from 'Components/shared/Wrapper';
import { Button } from 'Components/shared/Button';

const BannerNotificationRoot = styled.section`
    ${props => props.theme.color.getIntentPresetCss(props.intent)}
`;

const BannerNotificationInner = styled(props => <Wrapper padding {...props} />)`
    display: grid;
    grid-gap: ${props => props.theme.spacing.half};
    justify-items: center;

    ${props => props.theme.mediaQuery.low`
        grid-auto-flow: column;
        grid-gap: ${props.theme.spacing.base};
        align-items: center;
        justify-content: space-between;
    `}
`;

// const BannerNotificationIcon = styled.span``;

const BannerNotificationContent = styled.p``;

const BannerNotificationCtaRoot = styled.div`
    display: flex;
    flex-grow: 1;
`;

const BannerNotificationCtaButton = styled(Button)`
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
        <BannerNotificationInner>
            {/* {icon && <BannerNotificationIcon icon={icon} />} */}
            <BannerNotificationContent
                dangerouslySetInnerHTML={{ __html: content }}
            />
            {cta && (
                <BannerNotificationCtaRoot>
                    <BannerNotificationCtaButton intent={intent} href={cta.url}>
                        {cta.label}
                    </BannerNotificationCtaButton>
                </BannerNotificationCtaRoot>
            )}
        </BannerNotificationInner>
    </BannerNotificationRoot>
);

BannerNotification.propTypes = {
    content: PropTypes.string.isRequired,
    cta: PropTypes.object,
    // icon: PropTypes.string,
    intent: PropTypes.oneOf(['good', 'bad', 'ugly', 'neutral']),
};
