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

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;

    return graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            templateKey
                        }
                    }
                }
            }
        }
        `).then((result) => {
        if (result.errors) {
            result.errors.forEach(e => console.error(e.toString()));
            return Promise.reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach((edge) => {
            const { id } = edge.node;
            createPage({
                path: edge.node.fields.slug,
                component: path.resolve(`src/templates/${String(edge.node.frontmatter.templateKey)}.js`),
                // additional data can be passed via context
                context: {
                    id,
                },
            });
        });
    });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
    const { createNodeField } = boundActionCreators;

    if (node.internal.type === 'MarkdownRemark') {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: 'slug',
            node,
            value,
        });
    }
};
