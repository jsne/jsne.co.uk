/**
 * @module Status
 * @desc form state, e.g. error
 */

import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import { borders, spacingUnits } from '../../../styles/settings';
import { good, info, ugly } from '../../../styles/background';
import { transition } from '../../../styles/tools';

export const FORM_STATUSES = {
    error: 'error',
    success: 'success',
    info: 'info',
    // hidden: 'hidden',
};

const primaryClassName = css`
    ${transition('background-color, color, max-height, opacity, padding, transform')};
    max-width: 24rem;
    margin-bottom: ${spacingUnits.whole};
    padding: ${spacingUnits.half} ${spacingUnits.whole};
    border-radius: ${borders.radius};
    outline: ${borders.width} solid rgba(0, 0, 0, .2);
    outline-offset: -${borders.width};
    max-height: 10rem;
    opacity: 1;
    overflow: hidden;
    transform: translateY(0);
`;

const hiddenClassName = css`
    max-height: 0;
    opacity: 0;
    padding-top: 0;
    padding-bottom: 0;
    transform: translateY(-${spacingUnits.whole});
`;

const Status = ({ status, children, ...props }) => {
    let stateClassName = hiddenClassName;

    if (status === FORM_STATUSES.success) {
        stateClassName = good;
    } else if (status === FORM_STATUSES.info) {
        stateClassName = info;
    } else if (status === FORM_STATUSES.error) {
        stateClassName = ugly;
    }

    return (
        <div
            className={`${primaryClassName} ${stateClassName}`}
            {...props}
        >
            {children}
        </div>
    );
};

Status.propTypes = {
    status: PropTypes.oneOf(Object.keys(FORM_STATUSES)),
    children: PropTypes.node,
};

export default Status;
