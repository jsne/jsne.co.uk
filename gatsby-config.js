module.exports = {
    siteMetadata: {
        title: 'JSNE Website',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        // 'gatsby-plugin-emotion',
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
                path: `${__dirname}/src/img`,
                name: 'images',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [],
            },
        },
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE,
                accessToken: process.env.CONTENTFUL_TOKEN,
            },
        },
    ],
};
