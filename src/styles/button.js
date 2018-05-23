/**
 * @module button
 * @desc button styles
 */

import { css } from 'emotion';

import { borders, colors, lineHeights, spacingUnits } from './settings';
import { transition } from './tools';

import { primary as backgroundPrimary } from './background';

export const base = css`
    ${transition('filter, opacity, transform')};

    padding: .75rem ${spacingUnits.whole};
    border: 0;
    appearance: none;
    line-height: ${lineHeights.single};
    border-radius: ${borders.radius};
    box-shadow: ${colors.secondaryAlpha} .1rem .2rem 0;
    cursor: pointer;

    &:active {
        transform: translateY(${spacingUnits.nudge});
    }

    &:hover:not([disabled]),
    &:focus:not([disabled]) {
        filter: brightness(1.1);
    }

    &[disabled] {
        cursor: not-allowed;
        opacity: .5;
    }
`;

export const primary = css`
    font-weight: 500;
    ${base};
    ${backgroundPrimary};
`;

export const primaryLarge = css`
    ${primary};
    padding: ${spacingUnits.whole} 1.5rem;
`;
