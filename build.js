/* eslint-env node */
const { resolve } = require('path'); // eslint-disable-line import/no-extraneous-dependencies

/**
 * webpackConfig overrides
 * @type {Object}
 */
module.exports.webpackConfig = {
    node: {
        fs: 'empty',
    },
    resolve: {
        alias: {
            Assets: resolve(__dirname, 'src/assets'),
            Components: resolve(__dirname, 'src/components'),
            Graphql: resolve(__dirname, 'src/graphql'),
            Layouts: resolve(__dirname, 'src/layouts'),
            Pages: resolve(__dirname, 'src/pages'),
            Root: resolve(__dirname, 'src'),
            Static: resolve(__dirname, 'static'),
            Styles: resolve(__dirname, 'src/styles'),
            Templates: resolve(__dirname, 'src/templates'),
            Utiltities: resolve(__dirname, 'src/utilities'),
        },
        // @NOTE explictly defining `extensions` to appease eslint imports
        extensions: ['.mjs', '.js', '.jsx', '.wasm', '.json'],
        modules: ['node_modules', resolve(__dirname, 'src')],
    },
};
