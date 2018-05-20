/**
* @module Map
* @desc Google map
*/

import PropTypes from 'prop-types';
import React from 'react';
import GoogleMapReact from 'google-map-react';

import config from '../../../config';

import { colors } from '../../../styles/settings';

import Marker from './Marker';

const mapOptions = {
    clickableIcons: false,
    styles: [
        {
            stylers: [
                {
                    hue: colors.secondary,
                },
                {
                    saturation: 89,
                },
            ],
        },
        // {
        //     featureType: 'water',
        //     stylers: [
        //         {
        //             color: '#ffffff',
        //         },
        //     ],
        // },
        {
            featureType: 'administrative.country',
            elementType: 'labels',
            stylers: [
                {
                    visibility: 'off',
                },
            ],
        },
    ],
};

const Map = ({ center, markers, zoom = 16 }) => (
    <GoogleMapReact
        bootstrapURLKeys={{ key: config.vendors.googleMapsApiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={mapOptions}
    >
        {markers && markers.map((marker, i) => (
            <Marker {...marker} key={i} />
        ))}
    </GoogleMapReact>
);

Map.propTypes = {
    center: PropTypes.object,
    markers: PropTypes.array,
    zoom: PropTypes.number,
};

export default Map;
