/**
 * @module Wrapper
 */

import styled from 'react-emotion';

const Wrapper = styled('div')`
    flex-grow: 1; /* Auto grow in flex parents */
    max-width: ${props => props.theme.breakpoint.maximum};
    margin-right: auto;
    margin-left: auto;

    ${props => props.padded && props.theme.mediaQuery.low`
        padding-right: ${props.theme.spacing.base};
        padding-left: ${props.theme.spacing.base};
    `}

    ${'' /* @HACK @TODO remove overhang from header */}
    ${props => props.withResponsiveHeader && props.theme.mediaQuery.high`
        padding-top: 3rem;
    `}
`;

export default Wrapper;
