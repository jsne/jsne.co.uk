import { css } from 'emotion';

import { transition } from './tools';

/**
 * Get Theme without having to duplicate definition values
 */
const getTheme = () => {
    // Reference breakpoints
    const breakpoint = {
        minimum: '475px',
        low: '600px',
        medium: '800px',
        high: '1024px',
        higher: '1280px',
        maximum: '1400px',
    };

    // Root color definitions
    const color = {
        alphaDarkBase: 'rgba(29, 0, 48, 0.4)',
        alphaDarkDark: 'rgba(29, 0, 48, 0.55)',
        blueBase: '#1ebae0',
        greenBase: '#49b43b',
        orangeBase: '#ee9d30',
        pinkBase: '#e760ab',
        purpleBase: '#682ec6',
        purpleMid: '#4d268e',
        purpleDark: '#1d0031',
        purpleDarkAlpha: 'rgba(29, 0, 48, .75)',
        redBase: '#d21515',
        redLight: '#f7d2d2', // Roxxxxaaanne
        whiteBase: '#f8f8f8',
        whiteLight: '#ffffff',
        yellowBase: '#f9d72f',
        yellowLight: '#fff099',
    };

    return {
        border: {
            radiusBase: '.1rem',
            style: 'solid',
            widthBase: '2px',
        },
        breakpoint: {
            ...breakpoint,
        },
        color: {
            ...color,
            // Primary, secondary etc.
            uiPrimaryBase: color.yellowBase,
            uiPrimaryLight: color.yellowLight,
            uiPrimaryContrastBase: color.purpleDark,
            uiSecondaryBase: color.purpleBase,
            uiSecondaryDark: color.purpleMid,
            uiSecondaryContrastBase: color.whiteLight,
            // Pages
            uiPageAnchorBase: color.alphaDarkBase,
            uiPageAnchorActive: color.alphaDarkDark,
            uiPageBase: color.whiteLight,
            uiPageContrastBase: color.purpleDark,
            uiPageContrastAlpha: color.purpleDarkAlpha,
            // Statuses
            uiGoodBase: color.greenBase,
            uiBadBase: color.orangeBase,
            uiUglyBase: color.redBase,
            uiUglyLight: color.redLight,
            uiInfoBase: color.blueBase,
        },
        fontSize: {
            rootBase: '16px', // initial `:root` font-size
            rootLarge: '20px', // font-size for high DPI
            normal: '1rem',
            small: '.85rem',
            medium: '1.3rem',
            large: '1.6em',
            larger: '2rem',
        },
        lineHeight: {
            multi: 1.4375,
            normal: 1.2,
            single: 1,
            spaced: 1.6,
        },
        // Automagically generate media queries based on `breakpoint` key/values
        // Allows us to use media queries as functions in `styled` components like:
        // `${props => props.theme.mediaQuery.low`
        //     content: 'Only on low and up!';
        // `}`
        mediaQuery: Object.keys(breakpoint).reduce((acc, label) => {
            acc[label] = (...args) => css`
                @media (min-width: ${breakpoint[label]}) {
                    ${css(...args)}
                }
            `;

            return acc;
        }, {}),
        spacing: {
            base: '1rem',
            quarter: '.25rem',
            half: '.5rem',
            threeQuarter: '.75rem',
            double: '2rem',
            nudge: '.1rem',
        },
        transition: {
            call: (...args) => transition(...args), // Helper function
            delay: 0,
            duration: '.275s',
            timingFunction: 'cubic-bezier(.5, -.5, .3, 1.3)',
        },
    };
};

export default getTheme();
