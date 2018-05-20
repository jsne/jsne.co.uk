/**
 * @module Marker
 * @desc Marker for `Map` component
 */

import { css } from 'emotion';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { borders, colors, fontSizes, spacingUnits } from '../../../styles/settings';

import { primary as backgroundPrimary } from '../../../styles/background';

const className = css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-100%);
    z-index: 1;

    &::before,
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        display: block;
        border-radius: 100%;
        background-color: ${colors.secondary};
        z-index: -1;
    }

    &::before {
        width: 2rem;
        height: 2rem;
        opacity: .35;
        transform: translateY(.75rem);
    }

    &::after {
        width: .5rem;
        height: .5rem;
    }
`;

const classNameInner = css`
    ${backgroundPrimary};
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 7rem;
    padding: ${spacingUnits.half};
    border-radius: ${borders.radius};
    font-size: ${fontSizes.small};
    transform: translateY(-1rem);

    &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        bottom: -.75rem;
        left: 50%;
        border-width: .8rem .8rem 0 .8rem;
        border-style: solid;
        border-color: ${colors.primary} transparent transparent transparent;
        transform: translateX(-50%);
    }
`;

const classNameTitle = css`
    font-size: ${fontSizes.normal};
    margin-bottom: ${spacingUnits.half};
`;

const classNameLink = css`
    margin-top: ${spacingUnits.half};
    font-weight: bold;
    font-size: ${fontSizes.small};
    color: ${colors.secondary};
`;

class Marker extends Component {
    render() {
        return (
            <div
                className={className}
                lat={this.props.lat}
                lng={this.props.lng}
            >
                <div className={classNameInner}>
                    {this.props.title && <h2 className={classNameTitle}>{this.props.title}</h2>}
                    {this.props.text}
                    {this.props.link &&
                        <a
                            className={classNameLink}
                            href={this.props.link.href}
                            target="_blank"
                        >
                            {this.props.link.text}
                        </a>
                    }
                </div>
            </div>
        );
    }
}

Marker.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
    ]),
    text: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.element.isRequired,
    ]),
    link: PropTypes.object,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    children: PropTypes.node,
};

export default Marker;
