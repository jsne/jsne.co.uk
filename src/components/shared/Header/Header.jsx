import { css } from 'emotion';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';

import logo from 'Assets/images/logo-stroke.svg';

import {
 breakpoints, colors, lineHeights, spacingUnits, transitions 
} from '../../../styles/settings';
import containerClassName from '../../../styles/container';
import { primary as primaryClassName } from '../../../styles/background';

const className = css`
    ${primaryClassName};
    line-height: ${lineHeights.single};
`;

const innerClassName = css`
    ${containerClassName};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: ${spacingUnits.quarter};
    padding-bottom: ${spacingUnits.quarter};
`;

const navItemClassName = css`
    color: inherit;
    font-weight: inherit;
    padding-left: ${spacingUnits.double};
    transition: color ${transitions.duration} ${transitions.function};

    &:hover,
    &:active {
        color: ${colors.secondaryDark};
    }
`;

const logoClassName = css`
    width: 4rem;
    transform-origin: left bottom;
    transition: transform .2s ease-in-out;

    @media(min-width: ${breakpoints.high}) {
        transform: scale(1.65) translateY(1.75rem);
    }
`;

/*
`type` based styles
 */

const classNameHome = css`
    @media(min-width: 1400px) {
        position: absolute;
        width: 100%;
        margin-top: ${spacingUnits.whole};
        background-color: transparent;
    }
`;

const classNameNavHome = css`
    @media(min-width: ${breakpoints.high})  {
        margin-top: ${spacingUnits.double};
    }
`;

const navItemClassNameHome = css`
    @media(min-width: 1400px) {
        font-weight: bold;
        color: ${colors.primary};

        &:hover,
        &:focus {
            color: ${colors.secondaryTitle};
        }
    }
`;

const Header = ({ type }) => (
    <header
        role="banner"
        className={`${className}${type === 'home' ? ` ${classNameHome}` : ''}`}
    >
        <div className={innerClassName}>
            <Link to="/">
                <img className={logoClassName} src={logo} alt="JSNE" />
            </Link>

            <nav className={`${type === 'home' ? `${classNameNavHome}` : ''}`}>
                <Link
                    className={`${navItemClassName}${type === 'home' ? ` ${navItemClassNameHome}` : ''}`}
                    to="/conduct"
                >
                    Conduct
                </Link>
                <Link
                    className={`${navItemClassName}${type === 'home' ? ` ${navItemClassNameHome}` : ''}`}
                    to="/events"
                >
                    Events
                </Link>
            </nav>
        </div>
    </header>
);

Header.propTypes = {
    type: PropTypes.string,
};

export default Header;
