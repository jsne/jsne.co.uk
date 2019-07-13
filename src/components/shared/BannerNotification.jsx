import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

const BannerNotificationRoot = styled.section`
    ${({ theme, type }) => {
        let style = '';

        if (type === 'good') {
            style = `
                color: ${theme.color.uiStatusGoodContrast};
                background-color: ${theme.color.uiStatusGoodBase};
            `;
        } else if (type === 'bad') {
            style = `
                color: ${theme.color.uiStatusBadContrast};
                background-color: ${theme.color.uiStatusBadBase};
            `;
        } else if (type === 'ugly') {
            style = `
                color: ${theme.color.uiStatusUglyContrast};
                background-color: ${theme.color.uiStatusUglyBase};
            `;
        } else {
            style = `
                color: ${theme.color.uiStatusNeutralContrast};
                background-color: ${theme.color.uiStatusNeutralBase};
            `;
        }

        return css`
            ${style}
        `;
    }}
`;

const BannerNotificationIcon = styled.span``;

const BannerNotificationContent = styled.p``;

const BannerNotificationCta = styled.a``;

const BannerNotificationInner = styled.div``;

/**
 * Notification shown at top of page, cannot dismiss
 */
export const BannerNotification = ({
    type = 'neutral',
    content,
    cta,
    icon,
    ...props
}) => (
    <BannerNotificationRoot type={type} {...props}>
        <BannerNotificationInner>
            {icon && <BannerNotificationIcon icon={icon} />}
            <BannerNotificationContent
                dangerouslySetInnerHTML={{ __html: content }}
            />
            {cta && (
                <BannerNotificationCta href={cta.url}>
                    {cta.label}
                </BannerNotificationCta>
            )}
        </BannerNotificationInner>
    </BannerNotificationRoot>
);

BannerNotification.propTypes = {
    type: PropTypes.oneOf('good', 'bad', 'ugly', 'neutral'),
    icon: PropTypes.string,
    content: PropTypes.string.isRequired,
    cta: PropTypes.object,
};
