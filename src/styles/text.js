/**
 * @module text
 * @desc shared generic styles for text
 */

import { css } from 'emotion';

import { colors, fontSizes, lineHeights, spacingUnits } from './settings';

export const primary = css`
    font-weight: 700;
    font-style: italic;
    line-height: 1.2;
`;

export const h2 = css`
    ${primary};
    font-size: ${fontSizes.larger};
    margin-bottom: ${spacingUnits.whole};
`;

export const h3 = css`
    font-weight: 500;
    font-size: ${fontSizes.large};
    margin-bottom: ${spacingUnits.half};
`;

export const primaryShadow = css`
    color: ${colors.primary};
    text-shadow: ${colors.secondaryDarkAlpha} .1rem .125rem 0;
`;

export const spaced = css`
    line-height: ${lineHeights.spaced};
`;
