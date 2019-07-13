const { webpackConfig } = require('./build');

module.exports = {
    root: true,
    extends: [
        'plugin:import/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:shopify/esnext',
        'plugin:shopify/jest',
        'plugin:shopify/react',
        'prettier/react',
        'plugin:shopify/prettier',
    ],
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    globals: {},
    rules: {
        // indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'lines-around-comment': 0,
        'no-confusing-arrow': 0,
        'no-tabs': 0,
        semi: ['error', 'always'],

        // babel
        'babel/object-curly-spacing': 0,

        // react
        'react/jsx-filename-extension': 0,

        // shopify
        'shopify/strict-component-boundaries': 0,
    },
    settings: {
        'import/core-modules': [
            'graphql', // provided by gatsby
            'prop-types', // provided by gatsby
        ],
        'import/resolver': {
            webpack: {
                config: webpackConfig,
            },
        },
    },
};
