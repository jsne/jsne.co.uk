require('dotenv').config();

const { webpackConfig } = require('./build');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {

    siteMetadata: {
        title: 'JavaScript North East',
    },

    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-emotion',
            optons: {
                autoLabel: isDev,
                cssPropOptimization: true,
                labelFormat: '[local]',
                sourceMap: isDev,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: webpackConfig.resolve.alias.Assets,
                name: 'images',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE,
                accessToken: process.env.CONTENTFUL_TOKEN,
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-123707923-1',
                head: false,
                anonymize: true, // @NOTE enabled for GDPR
                respectDNT: true,
                exclude: ['/preview/**'],
            },
        },
    ],
};
