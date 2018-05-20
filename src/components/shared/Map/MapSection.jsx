/**
 * @module MapSection
 * @desc Full width `Map` component
 */

import React from 'react';
import { css } from 'emotion';

import { breakpoints } from '../../../styles/settings';

import Map from './Map';

const className = css`
    width: 100%;
    height: 20rem;
    scroll-behavior: smooth;

    @media (min-width: ${breakpoints.high}) {
        height: 30rem;
    }
`;

const MapSection = props => (
    <section className={className} id="venue-map">
        <Map {...props} />
    </section>
);

export default MapSection;
