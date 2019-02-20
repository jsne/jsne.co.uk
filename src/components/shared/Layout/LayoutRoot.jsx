/**
 * @module Root
 * @desc Root element of app
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

const LayoutRoot = styled(props => <main role="main" {...props} />)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 100vh;
`;

LayoutRoot.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutRoot;
