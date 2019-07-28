import { css } from '@emotion/core';
import styled from '@emotion/styled';

/**
 * Get maximum app width if requested
 */
export const wrapperCssFluid = props =>
    props.fluid
        ? undefined
        : css`
              max-width: ${props.theme.breakpoints.highest};
          `;

/**
 * Get right/left margin if requested
 */
export const wrapperCssMarginX = props =>
    props.marginX
        ? css`
              margin-right: auto;
              margin-left: auto;
          `
        : undefined;

/**
 * Get padding right/left properties if requested
 */
export const wrapperCssPaddingX = props =>
    props.paddingX || props.padding
        ? css`
              padding-right: ${props.theme.space.half};
              padding-left: ${props.theme.space.half};

              ${props.theme.mediaQuery.low`
            padding-right: ${props.theme.space.whole};
            padding-left: ${props.theme.space.whole};
        `}
          `
        : undefined;

/**
 * Get padding top/bottom properties if requested
 */
export const wrapperCssPaddingY = props =>
    props.paddingY || props.padding
        ? css`
              padding-top: ${props.theme.space.half};
              padding-bottom: ${props.theme.space.half};

              ${props.theme.mediaQuery.low`
            padding-top: ${props.theme.space.whole};
            padding-bottom: ${props.theme.space.whole};
        `}
          `
        : undefined;

/**
 * Main Wrapper component
 */
export const Wrapper = styled.div`
    ${wrapperCssFluid}
    ${wrapperCssMarginX}
    ${wrapperCssPaddingX}
    ${wrapperCssPaddingY}
    width: 100%;
`;

Wrapper.defaultProps = {
    /** Whether the layout is fluid */
    fluid: false,
    /** Whether to add auto padding at container sides */
    marginX: true,
    /** Whether to enable both X and Y padding */
    padding: false,
    /** Whether to enable X padding only */
    paddingX: false,
    /** Whether to enable Y padding only */
    paddingY: false,
};
