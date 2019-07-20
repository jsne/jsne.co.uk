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
    props.shadow
        ? css`
              text-shadow: 2px 2px ${props.theme.color.brandShadowBase};
          `
        : undefined;

export const headingFontFamilyCss = props => css`
    font-family: ${props.primary
        ? props.theme.fontFamily.title0
        : props.theme.fontFamily.title1};
`;

export const headingFontCss = props => css`
    font-weight: normal;
    ${headingShadowCss(props)}
    ${headingFontFamilyCss(props)}
`;
