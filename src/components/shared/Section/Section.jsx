/**
 * @module Section
 * @desc wrapped section with optional title and content
 */

import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import { breakpoints, spacingUnits } from '../../../styles/settings';

import Title from './Title';

const primaryClassName = css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${spacingUnits.whole} ${spacingUnits.half};

    @media(min-width: ${breakpoints.low}) {
        padding-top: ${spacingUnits.double};
        padding-bottom: ${spacingUnits.double};
    }

    @media(min-width: ${breakpoints.high}) {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    @media(min-width: ${breakpoints.higher}) {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    @media(min-width: ${breakpoints.maximum}) {
        padding-top: 5rem;
        padding-bottom: 5rem;
    }
`;

const classNameInner = css`
    @media(min-width: ${breakpoints.maximum}) {
        max-width: ${breakpoints.maximum};
        margin-right: auto;
        margin-left: auto;
}
`;

const classNameContent = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Section = ({
    title,
    children,
    className,
    shouldCenterChildren = true,
}) => (
    <section className={`${primaryClassName}${className ? ` ${className}` : ''}`}>
        <div className={classNameInner}>
            {title && <Title align="center">{title}</Title>}
            <div className={shouldCenterChildren ? classNameContent : ''}>{children}</div>
        </div>
    </section>
);

Section.propTypes = {
    shouldCenterChildren: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
    ]).isRequired,
    className: PropTypes.string,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
};

export default Section;
