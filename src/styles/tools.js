/**
 * @module tools
 * @desc style utility functions
 */

/* eslint-disable import/prefer-default-export */

import { css } from 'emotion';

import theme from './theme';

/**
 * css transition helper
 * @param  {string} [property='all']                       - CSS property e.g. 'color'
 * @param  {number|string} [delay=transitions.delay]       - delay before/after
 * @param  {number|string} [duration=transitions.duration] - duration
 * @param  {string} [timingFunction=transitions.function]  - timing function e.g. 'ease-in-out'
 * @return {Object}                                        - CSS style definition
 */
export const transition = (
    property = 'all',
    {
        delay = theme.transition.delay,
        duration = theme.transition.duration,
        timingFunction = theme.transition.function,
    } = {},
) => css`
    transition-delay: ${delay};
    transition-duration: ${duration};
    transition-property: ${property};
    transition-timing-function: ${timingFunction};
`;
