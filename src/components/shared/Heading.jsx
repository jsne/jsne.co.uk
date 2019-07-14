import { css } from '@emotion/core';

export const headingCssFont = ({ primary = true, ...props }) => css`
    font-family: ${primary
        ? props.theme.fontFamily.title0
        : props.theme.fontFamily.title1};
    font-weight: normal;
`;
