import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

const className = css`
	width: 100%;
	flex-grow: 1;
`;

const Container = ({ children }) => (
    <div className={className}>{children}</div>
);

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;
