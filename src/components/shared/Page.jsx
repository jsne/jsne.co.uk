/**
 * @module Page
 */

import styled from 'react-emotion';

const Page = styled('section')`
    padding: ${props => props.theme.spacing.base};
    border-radius: ${props => props.theme.border.radius};
    background-color: ${props => props.theme.color.uiPageBase};
    color: ${props => props.theme.color.uiPageContrastBase};
`;

export default Page;
