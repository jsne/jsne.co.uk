/**
 * @module Hero
 * @desc generic hero - takes full width
 */

import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import { secondary as secondaryClassName } from 'Styles/background';
import { breakpoints, colors, spacingUnits } from 'Styles/settings';

import backgroundImage from 'Assets/images/hero-background.svg';

const className = css`
    ${secondaryClassName};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem ${spacingUnits.whole};
    text-align: center;
    background-image: url('${backgroundImage}');
    background-size: cover;
    background-position: center center;

    @media(min-width: ${breakpoints.high}) {
        background-size: initial;
    }
`;

const classNameInner = css`
    max-width: 34rem;
`;

const classNameTitle = css`
    margin-bottom: ${spacingUnits.whole};
    font-size: 2.5rem;
    line-height: 1.3;
    font-style: italic;
    text-shadow: .1rem .1rem 0 ${colors.secondaryDarkAlpha};
    color: ${colors.primary};

    @media(min-width: ${breakpoints.medium}) {
        font-size: 2.75rem;
    }

    @media(min-width: ${breakpoints.high}) {
        font-size: 3rem;
    }

    @media(min-width: ${breakpoints.higher}) {
        font-size: 3.25rem;
    }
`;

const classNameBody = css`
    padding: ${spacingUnits.quarter};
`;

const Hero = ({ title, body }) => (
    <section className={className}>
        <div className={classNameInner}>
            <h1 className={classNameTitle}>{title}</h1>
            <div className={classNameBody}>{body}</div>
        </div>
    </section>
);

Hero.propTypes = {
    title: PropTypes.string,
    body: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Hero;
