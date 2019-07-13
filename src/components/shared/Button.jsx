import PropTypes from 'prop-types';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const Button = styled.a`
    ${props => props.theme.transition.call()}
    border-radius: ${props => props.theme.border.radius0};
    appearance: none;
    font-weight: ${props => props.theme.fontWeight.base1};
    text-align: center;

    :focus {
        box-shadow: 0 0 0 .25rem ${props =>
            props.theme.color.uiInteractiveOutlineBase};
        outline-style: solid;
        outline-offset: -1px;
    }

    :active {
        transform: translateY(${props => props.theme.spacing.nudge});
    }

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
    size: PropTypes.oneOf(['smaller', 'small', 'medium', 'large', null]),
};
