import { css } from '@emotion/core';

import { headingFontCss } from 'Styles/utils';

export const globalCss = theme => css`
    @font-face {
        font-family: '${theme.fontFamily.body0}';
        font-weight: 100 900;
        font-style: normal;
        font-display: swap;
        font-named-instance: 'Regular';
        src: url('https://rsms.me/inter/font-files/Inter-upright.var.woff2?v=3.7')
            format('woff2');
    }

    @font-face {
        font-family: '${theme.fontFamily.body1}';
        font-weight: 100 900;
        font-style: italic;
        font-display: swap;
        font-named-instance: 'Italic';
        src: url('https://rsms.me/inter/font-files/Inter-upright.var.woff2?v=3.7')
            format('woff2');
    }

    @font-face {
        font-family: '${theme.fontFamily.title0}';
        font-style: italic;
        font-weight: normal;
        font-display: swap;
        src: local('Raleway ExtraBold Italic'), local('Raleway-ExtraBoldItalic'),
            url(https://fonts.gstatic.com/s/raleway/v13/1Ptpg8zYS_SKggPNyCgw6qd_AtCb.woff2)
                format('woff2');
    }

    @font-face {
        font-family: '${theme.fontFamily.title1}';
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
        font-size: ${theme.fontSize.root0};

        ${theme.mediaQuery.maximum`
            font-size: ${theme.fontSize.root1};
        `}
    }

    body {
        margin: 0;
        font-size: ${theme.fontSize.normal};
        line-height: ${theme.lineHeight.multi};
        font-family: '${theme.fontFamily.body0}', arial, sans-serif;
        font-weight: ${theme.fontWeight.base0};
        background-color: ${theme.color.uiBodyBase};
        color: ${theme.color.uiBodyContrast};
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
        ${headingFontCss({ primary: true, theme })};
    }

    h3,
    h4,
    h5,
    h6 {
        ${headingFontCss({ theme })};
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
