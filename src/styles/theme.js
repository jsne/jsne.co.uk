/**
 * Get Theme without having to duplicate definition values
 */
const getTheme = () => {
    // Root color definitions
    const color = {
        blueBase: '#1ebae0',
        greenBase: '#49b43b',
        orangeBase: '#ee9d30',
        pinkBase: '#e760ab',
        purpleBase: '#682ec6',
        redBase: '#d21515',
        redLight: '#f7d2d2', // Roxxxxaaanne
        yellowBase: '#f9d72f',
        yellowLight: '#fff099',

        // Neutral / generic
        neutralDark: '#1d0031',
        neutralLightDark: '#e5e2e6',
        neutralLightBase: '#f8f8f8',
        neutralLightLight: '#ffffff',
    };

    return {
        border: {
            radiusBase: '.1rem',
            style: 'solid',
            widthBase: '2px',
        },
        breakpoint: {
            minimum: '475px',
            low: '600px',
            medium: '800px',
            high: '1024px',
            higher: '1280px',
            maximum: '1800px',
        },
        color: {
            ...color,

            // Primary, secondary etc.
            primaryBase: color.yellowBase,
            primaryLight: color.yellowLight,
            secondaryBase: color.purpleBase,
            secondaryDark: color.uiDark,

            // Statuses
            goodBase: color.greenBase,
            badBase: color.orangeBase,
            uglyBase: color.redBase,
            uglyLight: color.redLight,
            infoBase: color.blueBase,

            // UI colors
            uiDarkBase: color.neutralDark,
            uiMediumBase: color.neutralMedium,
            uiLightBase: color.neutralLight,
            uiLightLight: color.neutralLightest,
        },
        font: {
            size: {
                rootBase: '16px', // initial `:root` font-size
                rootLarge: '20px', // font-size for high DPI
                normal: '1rem',
                small: '.85rem',
                medium: '1.75rem',
                large: '2.125rem',
                larger: '2.75rem',
            },
        },
        lineHeight: {
            multi: 1.4375,
            normal: 1.2,
            single: 1,
            spaced: 1.6,
        },
        spacing: {
            base: '1rem',
            quarter: '.25rem',
            half: '.5rem',
            double: '2rem',
            nudge: '.1rem',
        },
        transition: {
            delay: 0,
            duration: '.275s',
            function: 'cubic-bezier(.5, -.5, .3, 1.3)',
        },
    };
};

export default getTheme();
