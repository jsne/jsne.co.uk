import { css } from '@emotion/core';

export const listCleanCss = () => css`
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    padding-left: 0;
    list-style: none;
`;

export const visuallyHiddenCss = () => css`
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
`;

export const headingShadowCss = props =>
    props.hasShadow
        ? css`
              text-shadow: 2px 2px
                  ${props.theme.colors.uiInteractiveOutlineBase};
          `
        : undefined;

export const headingFontFamilyCss = props => css`
    font-family: ${props.fonts ? props.fonts : props.theme.fonts.titles[0]},
        sans-serif;
`;

export const headingCss = props => css`
    font-weight: normal;
    ${headingShadowCss(props)}
    ${headingFontFamilyCss(props)}
`;
