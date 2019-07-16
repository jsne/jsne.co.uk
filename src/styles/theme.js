import { css } from '@emotion/core';

/**
 * Get Theme without having to duplicate definition values
 */
const getTheme = () => {
    // 0erence breakpoints
    const breakpoint = {
        minimum: '475px',
        low: '600px',
        medium: '800px',
        high: '1024px',
        higher: '1280px',
        maximum: '1400px',
    };

    // Root color definitions, not directly included in theme
    const rootColor = {
        // Blacks
        black500: '#322C3C',
        black600: '#4A4257',
        black700: '#8B8398',
        // Blues
        blue500: '#56CCF2',
        blue600: '#88E2FF',
        // Greens
        green500: '#49b43b',
        // Oranges
        orange500: '#ee9d30',
        // Pinks
        pink500: '#e760ab',
        // Purples
        purple100: '#1d0031',
        purple200: '#2a004d',
        purple400: '#3d268e',
        purple500: '#682ec6',
        purple600: '#8D50F0',
        // Reds
        red500: '#d21515',
        red600: '#f7d2d2',
        // Whites
        white500: '#f8f8f8',
        white700: '#f2f2f2',
        white900: '#ffffff',
        // Yellows
        yellow500: '#f9d72f',
        yellow600: '#fff099',
    };

    const transition = {
        delay: 0,
        duration: '.275s',
        timingFunction: 'cubic-bezier(.5, -.5, .3, 1.3)',
    };

    /**
     * css transition helper
     * @param  {string} [property='all']                       - CSS property e.g. 'color'
     * @param  {number|string} [delay=transitions.delay]       - delay before/after
     * @param  {number|string} [duration=transitions.duration] - duration
     * @param  {string} [timingFunction=transitions.function]  - timing function e.g. 'ease-in-out'
     * @return {Object}                                        - CSS style definition
     */
    const getTransitionCss = (
        property = 'all',
        {
            delay = transition.delay,
            duration = transition.duration,
            timingFunction = transition.function,
        } = {},
    ) => css`
        transition-delay: ${delay};
        transition-duration: ${duration};
        transition-property: ${property};
        transition-timing-function: ${timingFunction};
    `;

    const rootTheme = {
        border: {
            radius0: '.1rem',
            style: 'solid',
            width0: '2px',
        },
        breakpoint: {
            ...breakpoint,
        },
        color: {
            // Primary brand
            brand0Base: rootColor.yellow500,
            brand0Contrast: rootColor.purple200,
            // Secondary brand
            brand1Base: rootColor.purple500,
            brand1Contrast: rootColor.white700,
            // Shadow brand
            brandShadowBase: rootColor.purple100,
            brandShadowContrast: rootColor.white700,
            // Intent (statuses)
            intentGoodBase: rootColor.green500,
            intentGoodContrast: rootColor.white700,
            intentBadBase: rootColor.orange500,
            intentBadContrast: rootColor.white700,
            intentUglyBase: rootColor.red500,
            intentUglyContrast: rootColor.white900,
            intentNeutralBase: rootColor.blue500,
            intentNeutralContrast: rootColor.white700,
            // UI body
            uiBodyBase: rootColor.white700,
            uiBodyContrast: rootColor.black500,
            // UI interactive outline
            uiInteractiveOutlineBase: `${rootColor.purple100}58`,
            uiInteractiveOutlineContrast: rootColor.white900,
        },
        fontFamily: {
            body0: 'font-body-0',
            body1: 'font-body-1',
            title0: 'font-title-0',
            title1: 'font-title-1',
        },
        fontSize: {
            // initial `:root` font-size
            root0: '16px',
            // font-size for high DPI
            root1: '18px',
            normal: '1rem',
            small: '.85rem',
            medium: '1.3rem',
            large: '1.6rem',
            larger: '2rem',
            largest: '2.65rem',
        },
        fontWeight: {
            base0: 500,
            base1: 600,
            base2: 700,
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
            ...transition,
            // Helper function
            call: (...args) => getTransitionCss(...args),
        },
    };

    rootTheme.color.getIntentPresetCss = (intent = 'neutral') => {
        let style = '';

        if (intent === 'good') {
            style = `
                color: ${rootTheme.color.intentGoodContrast};
                background-color: ${rootTheme.color.intentGoodBase};
            `;
        } else if (intent === 'bad') {
            style = `
                color: ${rootTheme.color.intentBadContrast};
                background-color: ${rootTheme.color.intentBadBase};
            `;
        } else if (intent === 'ugly') {
            style = `
                color: ${rootTheme.color.intentUglyContrast};
                background-color: ${rootTheme.color.intentUglyBase};
            `;
        } else {
            style = `
                color: ${rootTheme.color.intentNeutralContrast};
                background-color: ${rootTheme.color.intentNeutralBase};
            `;
        }

        return css`
            ${style}
        `;
    };

    return rootTheme;
};

export const theme = getTheme();
