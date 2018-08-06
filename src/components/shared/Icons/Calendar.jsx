/**
 * @module Calendar
 * @desc Calendar icon
 */

import React from 'react';
import PropTypes from 'prop-types';

const Calendar = ({ style, ...props }) => (
    <svg
        viewBox="0 0 24 24"
        style={{
            width: '100%',
            ...style,
        }}
        {...props}
    >
        <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
    </svg>
);

Calendar.propTypes = {
    style: PropTypes.object,
};

export default Calendar;
