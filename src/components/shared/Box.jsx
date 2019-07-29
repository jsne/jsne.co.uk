import styled from '@emotion/styled';
import {
    color,
    fontFamily,
    fontWeight,
    layout,
    letterSpacing,
    lineHeight,
    space,
    textAlign,
} from 'styled-system';

export const Box = styled.div`
    ${color}
    ${fontFamily}
    ${fontWeight}
    ${layout}
    ${letterSpacing}
    ${lineHeight}
    ${space}
    ${textAlign}
`;

Box.propTypes = {
    ...color.propTypes,
    ...fontFamily.propTypes,
    ...fontWeight.propTypes,
    ...layout.propTypes,
    ...letterSpacing.propTypes,
    ...lineHeight.propTypes,
    ...space.propTypes,
    ...textAlign.propTypes,
};
