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
        black: '#322C3C',
        blacks: [
            '#000000',
            '#110f14',
            '#1c1922',
            '#26222e',
            '#322C3C',
            '#423a4e',
            '#544b61',
            '#6a6079',
            '#746a83',
        ],
        // Blues
        blue: '#36c3f1',
        blues: [
            '#113541',
            '#1b576c',
            '#25809e',
            '#2faad2',
            '#36c3f1',
            '#56CCF2',
            '#6bd9fc',
            '#91e3fc',
            '#b3edff',
        ],
        // Greens
        green: '#49b43b',
        greens: [
            '#182f16',
            '#20421c',
            '#2d6926',
            '#3e9134',
            '#49b43b',
            '#7ce76e',
            '#8df480',
            '#a3ff98',
            '#bdffb5',
        ],
        // Oranges
        orange: '#ee9d30',
        oranges: [
            '#1f1304',
            '#372309',
            '#543b19',
            '#795628',
            '#bb7e2d',
            '#ee9d30',
            '#faae48',
            '#ffc981',
            '#ffe0b5',
        ],
        // Pinks
        // pink: '#e760ab',
        // pinks: [],
        // Purples
        purple: '#682ec6',
        purples: [
            '#1d0031',
            '#2a004d',
            '#320557',
            '#3d268e',
            '#682ec6',
            '#8D50F0',
            '#a56ffb',
            '#b78dfa',
            '#cbb0f7',
        ],
        // Reds
        red: '#d21515',
        reds: [
            '#3c1010',
            '#5e1515',
            '#791717',
            '#a31a1a',
            '#d21515',
            '#f04343',
            '#f66565',
            '#f68686',
            '#f7d2d2',
        ],
        // Whites
        white: '#f8f8f8',
        whites: [
            '#7a7a7a',
            '#999999',
            '#aaaaaa',
            '#bebebe',
            '#d2d2d2',
            '#e3e3e3',
            '#e9e9e9',
            '#f8f8f8',
            '#ffffff',
        ],
        // Yellows
        yellow: '#f9d72f',
        yellows: [
            '#877107',
            '#a78c08',
            '#c8a80b',
            '#e4c00f',
            '#f9d72f',
            '#fee155',
            '#fce470',
            '#fbeea2',
            '#fff099',
        ],
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
            brandPrimaryBase: rootColors.yellow,
            brandPrimaryBases: [...rootColors.yellows],
            brandPrimaryContrast: rootColors.purples[1],
            // brandPrimaryContrasts: [],
            brandSecondaryBase: rootColors.purple,
            brandSecondaryBases: [...rootColors.purples],
            brandSecondaryContrast: rootColors.white,
            // brandSecondardContrasts: [],
            // Intent (statuses)
            intentGoodBase: rootColors.green,
            intentGoodBases: [...rootColors.greens],
            intentGoodContrast: rootColors.white,
            // intentGoodContrasts: [],
            intentBadBase: rootColors.orange500,
            intentBadBases: [...rootColors.oranges],
            intentBadContrast: rootColors.whites[6],
            // intentBadContrasts: [],
            intentUglyBase: rootColors.red,
            intentUglyBases: [...rootColors.reds],
            intentUglyContrast: [rootColors.white],
            intentUglyContrasts: [...rootColors.whites],
            intentNeutralBase: rootColors.blue,
            intentNeutralBases: [...rootColors.blues],
            intentNeutralContrast: rootColors.white,
            intentNeutralContrasts: [...rootColors.whites],
            // UI body
            uiBodyBase: rootColors.whites[6],
            // uiBodyBases: [],
            uiBodyContrast: rootColors.black,
            // uiBodyContrasts: [],
            // UI interactive outline
            uiInteractiveOutlineBase: `${rootColors.purples[0]}58`,
            // uiInteractiveOutlineBases: [],
            // uiInteractiveOutlineContrast: [],
            // uiInteractiveOutlineContrasts: [],
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
