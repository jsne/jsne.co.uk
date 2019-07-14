import { css } from '@emotion/core';

export const listCleanCss = () => css`
    margin-top: 0;
    margin-left: 0;
    padding-left: 0;
    list-style: none;
`;

export const visuallyHiddenCss = () => css`
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
`;
