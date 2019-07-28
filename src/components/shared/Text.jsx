import styled from '@emotion/styled';
import {
    color,
    fontFamily,
    fontWeight,
    letterSpacing,
    lineHeight,
    textAlign,
} from 'styled-system';

export const Text = styled.p`
    ${color}
    ${fontFamily}
    ${fontWeight}
    ${letterSpacing}
    ${lineHeight}
    ${textAlign}
`;

Text.defaultProps = {
    lineHeight: 3,
};

Text.propTypes = {
    ...color.propTypes,
    ...fontFamily.propTypes,
    ...fontWeight.propTypes,
    ...letterSpacing.propTypes,
    ...lineHeight.propTypes,
    ...textAlign.propTypes,
};
