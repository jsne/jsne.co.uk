import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import React from 'react';

import { Box } from './Box';

const TextIconIcon = styled.span`
    width: 1.25rem;
`;

const TextIconText = styled.span``;

export const TextIcon = ({ icon, text, ...props }) => (
    <Box
        as="p"
        display="grid"
        gridAutoFlow="column"
        gridGap="third"
        alignItems="center"
        justifyContent="center"
        {...props}
    >
        <TextIconIcon>{icon}</TextIconIcon>
        <TextIconText>{text}</TextIconText>
    </Box>
);

TextIcon.propTypes = {
    ...Text.propTypes,
    icon: PropTypes.node.isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
