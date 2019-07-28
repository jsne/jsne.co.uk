import { css } from '@emotion/core';

import { headingCss } from 'Components/shared/Heading';

export const globalCss = theme => css`
    @font-face {
        font-family: '${theme.fonts.bodys[0]}';
        font-weight: 100 900;
        font-style: normal;
        font-display: swap;
        font-named-instance: 'Regular';
        src: url('https://rsms.me/inter/font-files/Inter-upright.var.woff2?v=3.7')
            format('woff2');
    }

    @font-face {
        font-family: '${theme.fonts.bodys[1]}';
        font-weight: 100 900;
        font-style: italic;
        font-display: swap;
        font-named-instance: 'Italic';
        src: url('https://rsms.me/inter/font-files/Inter-upright.var.woff2?v=3.7')
            format('woff2');
    }

    @font-face {
        font-family: '${theme.fonts.titles[0]}';
        font-style: italic;
        font-weight: normal;
        font-display: swap;
        src: local('Raleway ExtraBold Italic'), local('Raleway-ExtraBoldItalic'),
            url(https://fonts.gstatic.com/s/raleway/v13/1Ptpg8zYS_SKggPNyCgw6qd_AtCb.woff2)
                format('woff2');
    }

    @font-face {
        font-family: '${theme.fonts.titles[1]}';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'),
            url(https://fonts.gstatic.com/s/raleway/v13/1Ptrg8zYS_SKggPNwIouWqZPAA.woff2)
                format('woff2');
    }

    * {
        box-sizing: border-box;
    }

    *::before,
    *::after {
        box-sizing: inherit;
    }

    :root {
        font-size: ${theme.root.fontSizes.bases[0]};

        ${theme.mediaQuery.highest`
            font-size: ${theme.root.fontSizes.bases[1]};
        `}
    }

    body {
        margin: 0;
        font-size: ${theme.fontSizes.normal};
        line-height: ${theme.lineHeights.multi};
        font-family: '${theme.fonts.bodys[0]}', arial, sans-serif;
        font-weight: ${theme.fontWeights.base};
        background-color: ${theme.colors.uiBodyBase};
        color: ${theme.colors.uiBodyContrast};
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        text-decoration: none;
    }

    button {
        border: 0;
        background-color: transparent;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        margin-bottom: 0;
    }

    h1,
    h2 {
        ${headingCss({ theme })};
    }

    h3,
    h4,
    h5,
    h6 {
        ${headingCss({ theme })};
    }

    img {
        display: block;
        max-width: 100%;
    }

    svg {
        display: block;
        width: 100%;
        height: auto;
    }
`;
