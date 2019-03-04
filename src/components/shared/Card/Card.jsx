import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import MDX from '@mdx-js/runtime/src/index';

const className = css`
	width: 100%;
	flex-grow: 1;
`;

const Card = ({ title, body }) => (
    <div className={className}>
        <h2>{title}</h2>
        <MDX>
            {body}
        </MDX>

    </div>
);

Card.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
};

export default Card;
