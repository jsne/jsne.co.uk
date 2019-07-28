import { css } from '@emotion/core';
import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
    color,
    fontFamily,
    fontWeight,
    letterSpacing,
    lineHeight,
    space,
    textAlign,
} from 'styled-system';

export const headingShadowCss = props =>
    props.hasShadow
        ? css`
              text-shadow: 0.1rem 0.1rem
                  ${props.theme.colors.uiInteractiveOutlineBase};
          `
        : undefined;

export const headingCss = (...args) => css`
    font-weight: normal;
    ${headingShadowCss(...args)}
    ${color(...args)}
    ${fontFamily(...args)}
    ${fontWeight(...args)}
    ${letterSpacing(...args)}
    ${lineHeight(...args)}
    ${space(...args)}
    ${textAlign(...args)}
`;

export const Heading = styled('div', { shouldForwardProp })`
    ${headingCss}
`;

Heading.defaultProps = {
    lineHeight: 'normal',
    fontFamily: 'titles.0',
};

Heading.propTypes = {
    ...color.propTypes,
    ...fontFamily.propTypes,
    ...fontWeight.propTypes,
    ...letterSpacing.propTypes,
    ...lineHeight.propTypes,
    ...space.propTypes,
    ...textAlign.propTypes,
};
