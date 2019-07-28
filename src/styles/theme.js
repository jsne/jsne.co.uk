import { css } from '@emotion/core';

/**
 * Get Theme without having to duplicate definition values
 */
const getTheme = () => {
    const rootBreakpoints = {
        lowest: '375px',
        lower: '411px',
        low: '600px',
        medium: '800px',
        high: '1024px',
        higher: '1280px',
        highest: '1400px',
    };

    // Root color definitions, not directly included in theme
    const rootColors = {
        // Blacks
        black500: '#322C3C',
        black600: '#4A4257',
        black700: '#8B8398',
        // Blues
        blue500: '#36c3f1',
        blue600: '#56CCF2',
        blue700: '#88E2FF',
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
        red600: '#f04343',
        red700: '#f66565',
        red900: '#f68686',
        red800: '#f7d2d2',
        // Whites
        white500: '#f8f8f8',
        white700: '#f2f2f2',
        white900: '#ffffff',
        // Yellows
        yellow500: '#f9d72f',
        yellow600: '#fff099',
    };

    const rootLineHeights = {
        single: 1,
        normal: 1.2,
        multi: 1.4375,
        spaced: 1.6,
    };

    const rootFontSizes = {
        smallest: '.65rem',
        smaller: '.75rem',
        small: '.85rem',
        normal: '1rem',
        medium: '1.3rem',
        large: '1.6rem',
        larger: '2rem',
        largest: '2.65rem',
        hero: '3rem',
    };

    const rootSpace = {
        nudge: '.1rem',
        quarter: '.25rem',
        third: '.333333rem',
        half: '.5rem',
        twoThird: '.666666rem',
        threeQuarter: '.75rem',
        whole: '1rem',
        wholeQuarter: '1.25rem',
        wholeHalf: '1.5rem',
        wholeThreeQuarter: '1.75rem',
        double: '2rem',
    };

    const rootTransition = {
        delay: 0,
        duration: '.275s',
        timingFunction: 'cubic-bezier(.5, -.5, .3, 1.3)',
    };

    /**
     * Css transition helper
     */
    const getTransitionCss = (
        property = 'all',
        {
            delay = rootTransition.delay,
            duration = rootTransition.duration,
            timingFunction = rootTransition.timingFunction,
        } = {},
    ) => css`
        transition-delay: ${delay};
        transition-duration: ${duration};
        transition-property: ${property};
        transition-timing-function: ${timingFunction};
    `;

    const mediaQuery = Object.keys(rootBreakpoints).reduce((acc, label) => {
        acc[label] = (...args) => css`
            @media (min-width: ${rootBreakpoints[label]}) {
                ${css(...args)}
            }
        `;

        return acc;
    }, {});

    const rootTheme = {
        root: {
            fontSizes: {
                bases: ['16px', '18px'],
            },
        },
        zIndices: [],
        radii: ['.1rem'],
        borders: {
            borderStyles: ['solid'],
            borderWidths: [1, 2],
        },
        breakpoints: {
            ...Object.values(rootBreakpoints),
            ...rootBreakpoints,
        },
        colors: {
            // brand
            brandPrimaryBase: rootColors.yellow500,
            brandPrimaryBases: [],
            brandPrimaryContrast: rootColors.purple200,
            brandPrimaryContrasts: [],
            brandSecondaryBase: rootColors.purple500,
            brandSecondaryBases: [],
            brandSecondaryContrast: rootColors.white500,
            brandSecondardContrasts: [],
            // Intent (statuses)
            intentGoodBase: rootColors.green500,
            intentGoodBases: [],
            intentGoodContrast: rootColors.white700,
            intentGoodContrasts: [],
            intentBadBase: rootColors.orange500,
            intentBadBases: [],
            intentBadContrast: rootColors.white700,
            intentBadContrasts: [],
            intentUglyBase: [rootColors.red500],
            intentUglyBases: [],
            intentUglyContrast: [],
            intentUglyContrasts: [rootColors.white900],
            intentNeutralBase: [rootColors.blue500],
            intentNeutralBases: [],
            intentNeutralContrast: rootColors.white500,
            intentNeutralContrasts: [rootColors.white700],
            // UI body
            uiBodyBase: [rootColors.white700],
            uiBodyBases: [],
            uiBodyContrast: [rootColors.black500],
            uiBodyContrasts: [],
            // UI interactive outline
            uiInteractiveOutlineBase: `${rootColors.purple100}58`,
            uiInteractiveOutlineBases: [],
            uiInteractiveOutlineContrast: [],
            uiInteractiveOutlineContrasts: [rootColors.white900],
        },
        fonts: {
            bodys: ['font-body-0', 'font-body-1'],
            titles: ['font-title-0', 'font-title-1'],
        },
        fontSizes: {
            ...Object.values(rootFontSizes),
            ...rootFontSizes,
        },
        fontWeights: {
            base: 500,
            bases: [300, 400, 500, 600, 700],
        },
        lineHeights: {
            ...Object.values(rootLineHeights),
            ...rootLineHeights,
        },
        // Automagically generate media queries based on `breakpoint` key/values
        // Allows us to use media queries as functions in `styled` components like:
        // `${props => props.theme.mediaQuery.low`
        //     content: 'Only on low and up!';
        // `}`
        mediaQuery,
        space: {
            ...Object.values(rootSpace),
            ...rootSpace,
        },
        transition: {
            ...rootTransition,
            call: (...args) => getTransitionCss(...args),
        },
    };

    rootTheme.colors.getIntentPresetCss = (intent = 'neutral') => {
        let style = '';

        if (intent === 'good') {
            style = `
                color: ${rootTheme.colors.intentGoodContrast};
                background-color: ${rootTheme.colors.intentGoodBase};
            `;
        } else if (intent === 'bad') {
            style = `
                color: ${rootTheme.colors.intentBadContrast};
                background-color: ${rootTheme.colors.intentBadBase};
            `;
        } else if (intent === 'ugly') {
            style = `
                color: ${rootTheme.colors.intentUglyContrast};
                background-color: ${rootTheme.colors.intentUglyBase};
            `;
        } else {
            style = `
                color: ${rootTheme.colors.intentNeutralContrast};
                background-color: ${rootTheme.colors.intentNeutralBase};
            `;
        }

        return css`
            ${style}
        `;
    };

    return rootTheme;
};

export const theme = getTheme();
