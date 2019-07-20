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

export const headdingShadowCss = props => css`
    text-shadow: ${props.shadow &&
        `2px 2px ${props.theme.color.brandShadowBase}`};
`;

export const headingFontCss = ({ primary = true, ...props }) => css`
    ${headdingShadowCss}
    font-family: ${
        primary ? props.theme.fontFamily.title0 : props.theme.fontFamily.title1
    };
    font-weight: normal;
`;
