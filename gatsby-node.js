/* eslint-disable no-console, consistent-return */

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const generateBabelConfig = require('gatsby/dist/utils/babel-config');

const { webpackConfig } = require('./build');
const { browserslist } = require('./package.json');

const isDev = process.env.NODE_ENV !== 'production';

exports.modifyWebpackConfig = ({ config }) => {
    if (!isDev) {
        config.plugin('UglifyJsPlugin', UglifyJsPlugin);
    }

    return config.merge(webpackConfig);
};

exports.modifyBabelrc = ({ babelrc }) => {
    const plugins = [
        [require.resolve('babel-plugin-emotion'), {
            hoist: !isDev,
            sourceMap: isDev,
            autoLabel: isDev,
        }],
    ];

    if (!isDev) {
        plugins.unshift(['babel-preset-env', {
            targets: {
                browsers: browserslist,
            },
        }]);
    }

    return {
        ...babelrc,
        plugins: babelrc.plugins.concat(plugins),
    };
};

