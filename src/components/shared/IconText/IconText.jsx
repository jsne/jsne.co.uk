/**
 * @module IconText
 * @desc icon with text
 */

import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import { colors, lineHeights, spacingUnits } from '../../../styles/settings';
import { transition } from '../../../styles/tools';

const primaryClassName = css`
    display: flex;
    align-items: center;
    line-height: ${lineHeights.single};
`;

const classNameIteractive = css`
    ${transition('color')};

    scroll-behavior: smooth;

    &:hover,
    &:focus {
        color: ${colors.light};
    }
`;

const classNameIcon = css`
    width: 1.25rem;
    margin-right: ${spacingUnits.quarter};
    fill: currentColor;
`;

/**
 * return anchor or div depending on `to` prop
 * @param {Object} children  - child nodes
 * @param {Object} [to=null] - valid href value
 * @param {Object} props     - additional props
 */
const IconTextRoot = ({
    className = '',
    children,
    to = null,
    ...props
}) => {
    if (to) {
        const optionalProps = {};

        if (to.startsWith('#')) {
            optionalProps.onClick = (ev) => {
                ev.preventDefault();
                const el = document.querySelector(to);
                el.scrollIntoView({ behavior: 'smooth' });
                el.focus();
            };
        }

        return (
            <a
                className={`${primaryClassName} ${classNameIteractive} ${className}`}
                href={to}
                {...props}
                {...optionalProps}
            >
                {children}
            </a>
        );
    }

    return <div className={primaryClassName} {...props}>{children}</div>;
};

IconTextRoot.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    to: PropTypes.string,
};

const IconText = ({ icon, text, ...props }) => (
    <IconTextRoot {...props}>
        <div className={classNameIcon}>
            {icon}
        </div>
        {text}
    </IconTextRoot>
);

IconText.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.oneOfType([
        PropTypes.element.isRequired,
        PropTypes.string.isRequired,
    ]),
};

export default IconText;
