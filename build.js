const { resolve } = require('path');

/**
 * webpackConfig overrides
 * @type {Object}
 */
module.exports.webpackConfig = {
    resolve: {
        root: resolve(__dirname, './src'),
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
            react: resolve(__dirname, './node_modules/react'), // stop gatbsy doing anything crazy
            Components: resolve(__dirname, './src/components'),
            Img: resolve(__dirname, './src/img'),
            Layouts: resolve(__dirname, './src/layouts'),
            Pages: resolve(__dirname, './src/pages'),
            Root: resolve(__dirname, './src'),
            Static: resolve(__dirname, './static'),
            Styles: resolve(__dirname, './src/styles'),
            Templates: resolve(__dirname, './src/templates'),
            Utiltities: resolve(__dirname, './src/utilities'),
        },
    },
};
