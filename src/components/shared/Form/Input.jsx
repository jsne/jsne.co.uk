/**
 * @module Input
 * @desc standard input element
 */

import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import { borders, colors, lineHeights, spacingUnits } from '../../../styles/settings';
import { transition } from '../../../styles/tools';

const className = css`
    ${transition('border-color')};

    line-height: ${lineHeights.default};
    border: ${borders.width} ${borders.style} ${colors.darkAlphaMid};
    padding: .75rem ${spacingUnits.whole};
    border-radius: ${borders.radius};
    background-color: ${colors.light};
    color: ${colors.textDark};

    &:hover {
        border-color: ${colors.secondary};
    }

    &:focus {
        border-color: ${colors.primary};
    }

    &:invalid:not(:placeholder-shown) {
        border-color: ${colors.ugly};
        background-color: ${colors.uglyFade};
        color: ${colors.ugly};
    }
`;

const Input = ({
    placeholder = '',
    type = 'text',
    onChange,
    required,
    value = '',
    name,
}) => {
    const optionalProps = {};

    if (onChange) {
        optionalProps.onChange = onChange;
    }

    if (required === true) {
        optionalProps.required = required;
    }

    if (value) {
        optionalProps.value = value;
    }

    if (name) {
        optionalProps.name = name;
    }

    return (
        <input
            className={className}
            placeholder={placeholder}
            type={type}
            {...optionalProps}
        />
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
};

export default Input;
