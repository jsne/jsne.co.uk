import PropTypes from 'prop-types';
import React from 'react';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const ButtonRoot = styled.a`
    ${props => props.theme.transition.call()}
    display: inline-flex;
    border-radius: ${props => props.theme.border.radius0};
    appearance: none;
    font-weight: ${props => props.theme.fontWeight.base1};
    line-height: ${props => props.theme.lineHeight.single};
    text-align: center;
    color: ${props => props.theme.color.brand1Base};

    :focus {
        box-shadow: 0 0 0 0.25rem
            ${props => props.theme.color.uiInteractiveOutlineBase};
        outline-style: solid;
        outline-offset: -1px;
    }

    :active {
        transform: translateY(${props => props.theme.spacing.nudge});
    }

    ${props =>
        props.disabled &&
        css`
            cursor: not-allowed;
        `}

    ${props => {
        // Default CSS, default to none
        const cssAppearance = ``;
        let cssSize = ``;

        // Set appearance if requested
        // if (props.appearance === 'primary') {
        // } else if (props.appearance === 'secondary') {
        // }

        // Set size if requested
        if (props.size === 'smaller') {
            cssSize = `
                padding: ${props.theme.spacing.quater} ${props.theme.spacing.half};
                font-size: ${props.theme.fontSize.small};
            `;
        } else if (props.size === 'small') {
            cssSize = `
                padding: ${props.theme.spacing.half} ${props.theme.spacing.threeQuarter};
                font-size: ${props.theme.fontSize.small};
            `;
        } else if (props.size === 'medium') {
            cssSize = `
                padding: ${props.theme.spacing.threeQuarter} ${props.theme.spacing.base};
            `;
        } else if (props.size === 'large') {
            cssSize = `
                padding: ${props.theme.spacing.base} ${props.theme.spacing.double};`;
        }

        return css(cssAppearance, cssSize);
    }}
`;

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
