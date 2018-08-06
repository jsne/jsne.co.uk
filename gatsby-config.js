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
                spaceId: '57zqw4qqv6jg',
                accessToken: '4f0a37d0f56ae49f18c4e1dc81f1dcc8f6b81a49f07a5e21bacf20ed5265033b',
            },
        },
     
    ],
};
