/**
 * @module Row
 * @desc Row within form for grouping content
 */

import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import { spacingUnits } from '../../../styles/settings';
import { flexColumnCenter as classNameFlexColumnCenter } from '../../../styles/flex';

const primaryClassName = css`
    margin-bottom: ${spacingUnits.whole};

    &:last-of-type {
        margin-bottom: 0;
    }
`;

const Row = ({ center = false, children, ...props }) => (
    <div
        className={`${primaryClassName}${center ? ` ${classNameFlexColumnCenter}` : ''}`}
        {...props}
    >
        {children}
    </div>
);

Row.propTypes = {
    center: PropTypes.bool,
    children: PropTypes.node,
};

export default Row;
