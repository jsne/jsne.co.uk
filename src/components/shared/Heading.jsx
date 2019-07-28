import PropTypes from 'prop-types';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';

import { headingCss } from 'Styles/utils';

export const Heading = styled('div', { shouldForwardProp: isPropValid })`
    ${headingCss};
`;

Heading.propTypes = {
    primary: PropTypes.bool,
    shadow: PropTypes.bool,
};
