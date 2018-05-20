/**
 * @module Title
 * @desc title for Section component
 */

import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import underlineImage from '../../../img/header-underline.svg';

import { colors, spacingUnits } from '../../../styles/settings';


const primaryClassName = css`
    font-style: italic;
    margin-bottom: ${spacingUnits.whole};
    padding: 0 ${spacingUnits.quarter} ${spacingUnits.half} ${spacingUnits.quarter};
    background-image: url('${underlineImage}');
    background-size: 3rem;
    background-position: center bottom;
    background-repeat: no-repeat;
    color: ${colors.secondaryDark};
`;

const Title = ({ children, ...props }) => (
    <h1 className={`${primaryClassName}`} {...props}>{children}</h1>
);

Title.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Title;
