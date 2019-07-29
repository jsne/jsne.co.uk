import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import React from 'react';

import { Text } from './Text';

const TextIconRoot = styled(Text)`
    display: flex;
    grid-gap: ${props => props.theme.space.half};
    align-items: center;
    justify-content: center;
`;

const TextIconIcon = styled.span`
    width: 1.35rem;
`;

const TextIconText = styled.span``;

export const TextIcon = ({ icon, text, ...props }) => (
    <TextIconRoot {...props}>
        <TextIconIcon>{icon}</TextIconIcon>
        <TextIconText>{text}</TextIconText>
    </TextIconRoot>
);

TextIcon.propTypes = {
    ...Text.propTypes,
    icon: PropTypes.node.isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
