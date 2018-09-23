const { resolve } = require('path');

/**
 * webpackConfig overrides
 * @type {Object}
 */
module.exports.webpackConfig = {
    resolve: {
        alias: {
            Assets: resolve(__dirname, 'src/assets'),
            Components: resolve(__dirname, 'src/components'),
            Layouts: resolve(__dirname, 'src/layouts'),
            Pages: resolve(__dirname, 'src/pages'),
            Root: resolve(__dirname, 'src'),
            Static: resolve(__dirname, 'static'),
            Styles: resolve(__dirname, 'src/styles'),
            Templates: resolve(__dirname, 'src/templates'),
            Utiltities: resolve(__dirname, 'src/utilities'),
        },
        modules: ['node_modules', resolve(__dirname, 'src')],
    },
};
