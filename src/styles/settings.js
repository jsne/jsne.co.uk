/**
 * @module styles
 * @desc shared CSS variables for app
 */

export const borders = {
    radius: '.1rem',
    style: 'solid',
    width: '2px',
};

export const breakpoints = {
    maximum: '1800px',
    // minimum: '375px',
    low: '600px',
    medium: '800px',
    high: '1024px',
    higher: '1280px',
};

export const colors = {
    primary: '#f9cc2f',
    primaryText: 'rgba(42, 0, 77, .75)',
    secondary: '#682ec6',
    secondaryDark: 'rgb(42, 0, 77)',
    secondaryDarkAlpha: 'rgba(42, 0, 77, .75)',
    secondaryText: 'rgba(255, 255, 255, .75)',
    secondaryTitle: 'rgb(255, 255, 255)',
    text: 'rgba(53, 51, 59, 0.75)', // 'rgb(95, 93, 105)',
    textDark: 'rgba(53, 51, 59, 0.85)',
    light: 'rgb(255, 255, 255)',
    lightMedium: 'rgb(240, 243, 247)',
    lightLow: 'rgb(230, 232, 235)',
    darkAlphaMid: 'rgba(37, 24, 48, 0.35)',
    // statuses
    good: 'rgb(73, 180, 59)',
    bad: 'rgb(233, 150, 9)',
    ugly: 'rgb(217, 13, 13)',
    uglyFade: 'rgb(247, 210, 210)',
    info: 'rgb(86, 207, 219)',
};

export const fonts = {
    primary: 'Overpass',
};

export const fontSizes = {
    normal: '1rem',
    small: '.85rem',
    medium: '1.75rem',
    large: '2.125rem',
    larger: '2.75rem',
};

export const lineHeights = {
    // normal: 1.2,
    multi: 1.4375,
    single: 1,
    spaced: 1.6,
};

export const spacingUnits = {
    quarter: '.25rem',
    half: '.5rem',
    whole: '1rem',
    double: '2rem',
    nudge: '.1rem',
};

export const transitions = {
    delay: 0,
    duration: '.275s',
    function: 'cubic-bezier(.5, -.5, .3, 1.3)',
};
