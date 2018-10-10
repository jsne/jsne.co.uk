/* eslint-disable no-console, consistent-return */

const { webpackConfig } = require('./build');

exports.onCreateWebpackConfig = ({
    actions,
    // getConfig,
    // loaders,
    // rules,
    // stage,
}) => {
    actions.setWebpackConfig(webpackConfig);
};
