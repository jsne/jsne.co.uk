/**
 * @module config
 * @desc settings for app
 */

const config = {
    venues: {
        jazzCafe: {
            address: {
                postcode: 'NE1 5DW',
                street: '25 Pink Ln',
            },
            location: {
                lat: 54.969895,
                lng: -1.619179,
            },
            mapsLink: 'https://www.google.co.uk/maps/place/Jazz+Cafe/@54.969651,-1.618616,15z/data=!4m5!3m4!1s0x0:0xa858c3a1293afc4d!8m2!3d54.969651!4d-1.618616',
            name: 'Jazz Cafe',
        },
    },
    vendors: {
        googleMapsApiKey: 'AIzaSyD5pHhUcM8WqQoLgvSDSBrBkel7zOAzjv4',
    },
};

export default config;
