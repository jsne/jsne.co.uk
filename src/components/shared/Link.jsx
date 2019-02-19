/**
 * @module Link
 * @desc Anchor components
 */

import styled from 'react-emotion';

const Link = styled('a')`
    ${props => props.theme.transition.call('color')}
    color: ${props => props.theme.color.uiSecondaryBase};

    &:hover,
    &:focus {
        color: ${props => props.theme.color.uiInfoBase};
    }
`;

export default Link;
