/**
 * @module Root
 * @desc Root element of app
 */

import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

const className = css`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	min-height: 100vh;
`;

const Root = ({ children }) => (
    <main role="main" className={className}>{children}</main>
);

Root.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Root;
