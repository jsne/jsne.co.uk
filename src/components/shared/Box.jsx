import styled from '@emotion/styled';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    space,
    textAlign,
    typography,
} from 'styled-system';

export const Box = styled('div', { shouldForwardProp })`
	${background}
	${border}
	${color}
	${flexbox}
	${grid}
	${layout}
	${position}
	${space}
	${typography}
`;

Box.propTypes = {
    ...background.propTypes,
    ...border.propTypes,
    ...color.propTypes,
    ...flexbox.propTypes,
    ...grid.propTypes,
    ...layout.propTypes,
    ...position.propTypes,
    ...space.propTypes,
    ...textAlign.propTypes,
    ...typography.propTypes,
};
