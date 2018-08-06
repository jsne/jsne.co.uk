/**
 * @module Input
 * @desc standard input element
 */

import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import { colors } from '../../../styles/settings';

const className = css`
    display:block;
    color: ${colors.textDark};
`;

const Label = ({ value = '', htmlFor }) => <label className={className} htmlFor={htmlFor}>{value}</label>;

Label.propTypes = {
    htmlFor: PropTypes.string,
    value: PropTypes.string,
};

export default Label;
