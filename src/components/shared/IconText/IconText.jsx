/**
 * @module IconText
 * @desc icon with text
 */

import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import config from 'Root/config';

import underlineImage from 'Img/header-underline.svg';

import { colors, lineHeights, spacingUnits } from 'Styles/settings';
import { transition } from 'Styles/tools';

const primaryClassName = css`
    display: flex;
    align-items: center;
    line-height: ${lineHeights.single};
`;

const classNameIteractive = css`
    ${transition('color, transform')};
    scroll-behavior: smooth;
    padding-bottom: ${spacingUnits.nudge};
    background-image: url('${underlineImage}');
    background-size: 3rem;
    background-position: left bottom;
    background-repeat: repeat-x;

    &:hover,
    &:focus {
        color: ${colors.light};
    }

    &:active {
        transform: translateY(${spacingUnits.nudge});
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

        // open external links in new window
        if (!to.includes(config.app.domain)) {
            optionalProps.target = '_blank';
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
