import PropTypes from 'prop-types';
import React from 'react';
import { fontWeight } from 'styled-system';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const ButtonRoot = styled.a`
    ${fontWeight}
    ${props => props.theme.transition.call()}
    display: inline-flex;
    border-radius: ${props => props.theme.radii[0]};
    appearance: none;
    line-height: ${props => props.theme.lineHeights.single};
    text-align: center;
    color: ${props => props.theme.colors.brandSecondaryBase};

    :focus {
        box-shadow: 0 0 0 0.25rem
            ${props => props.theme.colors.uiInteractiveOutlineBase};
        outline-style: solid;
        outline-offset: -1px;
    }

    :active {
        transform: translateY(${props => props.theme.space.nudge});
    }

    ${props =>
        props.disabled &&
        css`
            cursor: not-allowed;
        `}

    ${props => {
        // Default CSS, default to none
        let cssSize = ``;

        // Set size if requested
        if (props.size === 'smaller') {
            cssSize = `
                padding: ${props.theme.space.quater} ${props.theme.space.half};
                font-size: ${props.theme.fontSizes.small};
            `;
        } else if (props.size === 'small') {
            cssSize = `
                padding: ${props.theme.space.half} ${props.theme.space.threeQuarter};
                font-size: ${props.theme.fontSizes.small};
            `;
        } else if (props.size === 'medium') {
            cssSize = `
                padding: ${props.theme.space.threeQuarter} ${props.theme.space.whole};
            `;
        } else if (props.size === 'large') {
            cssSize = `
                padding: ${props.theme.space.whole} ${props.theme.space.double};`;
        }

        return css(cssSize);
    }}
`;

ButtonRoot.propTypes = {
    ...fontWeight.propTypes,
};

ButtonRoot.defaultProps = {
    fontWeight: 600,
};

export const Button = ({ appearance, size, href, ...props }) => {
    const url = href && href.includes('://') ? new URL(href) : null;
    const optionalProps = {};

    // Add smooth scroll if host is the same, `url` has hash and its supported
    if (
        typeof window !== 'undefined' &&
        typeof Element !== 'undefined' &&
        Element.prototype.scrollIntoView &&
        url &&
        url.hash &&
        url.host === window.location.host
    ) {
        optionalProps.onClick = ev => {
            ev.preventDefault();

            const el = document.querySelector(url.hash);
            el.scrollIntoView({ behavior: 'smooth' });
            el.focus();
        };
    }

    // Open external links in new window (can be overriden by props)
    if (
        typeof window !== 'undefined' &&
        url &&
        url.host !== window.location.host
    ) {
        optionalProps.target = '_blank';
    }

    return (
        <ButtonRoot
            appearance={appearance}
            href={href}
            size={size}
            {...optionalProps}
            {...props}
        />
    );
};

Button.defaultProps = {
    size: 'medium',
};

Button.propTypes = {
    appearance: PropTypes.oneOf([
        'primary',
        'secondary',
        'good',
        'bad',
        'ugly',
        null,
    ]),
    href: PropTypes.string,
    size: PropTypes.oneOf(['smaller', 'small', 'medium', 'large', null]),
};
