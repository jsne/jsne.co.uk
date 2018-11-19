/**
 * @module IconText
 * @desc icon with text
 */

import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import config from 'Root/config';

import underlineImage from 'Assets/images/header-underline.svg';

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

    &:hover,
    &:focus {
        color: ${colors.light};
    }

    &:active {
        transform: translateY(${spacingUnits.nudge});
    }
`;

const classNameUnderline = css`
    padding-bottom: ${spacingUnits.nudge};
    background-image: url('${underlineImage}');
    background-size: 3rem .5rem;
    background-position: left bottom;
    background-repeat: repeat-x;
`;

const classNameIcon = css`
    width: 1rem;
    flex-shrink: 0;
    margin-right: ${spacingUnits.quarter};
    fill: currentColor;
`;

const classNameIconLarge = css`
    width: 1.25rem;
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
    underline = false,
    ...props
}) => {
    // eslint-disable-next-line no-underscore-dangle
    const _className = [
        primaryClassName,
        className,
    ];

    if (underline) {
        // `className` arg always goes last
        _className.unshift(classNameUnderline);
    }

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

        _className.push(classNameIteractive);

        return (
            <a
                className={_className.join(' ')}
                href={to}
                {...props}
                {...optionalProps}
            >
                {children}
            </a>
        );
    }

    return <div className={_className.join(' ')} {...props}>{children}</div>;
};

IconTextRoot.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    to: PropTypes.string,
    underline: PropTypes.bool,
};

const IconText = ({
    icon,
    text,
    iconSize = '',
    ...props
}) => (
    <IconTextRoot {...props}>
        <div className={`${classNameIcon}${iconSize === 'large' ? ` ${classNameIconLarge}` : ''}`}>
            {icon}
        </div>
        {text}
    </IconTextRoot>
);

IconText.propTypes = {
    icon: PropTypes.element.isRequired,
    iconSize: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.element.isRequired,
        PropTypes.string.isRequired,
    ]),
};

export default IconText;
