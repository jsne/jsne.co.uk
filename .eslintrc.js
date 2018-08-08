const { webpackConfig } = require('./build');

module.exports = {
    'extends': [
        'airbnb',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    'parser': 'babel-eslint',
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
    },
    'rules': {
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'no-confusing-arrow': 0,
        'no-tabs': 0,
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],

        // jsx
        'jsx-a11y/anchor-is-valid': 0,
        "jsx-a11y/label-has-for": [ 2, {
            "components": [ "Label" ],
            "required": {
                "some": [ "nesting", "id" ]
            },
            "allowChildren": false,
        }],
        // react
        'react/forbid-prop-types': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/prefer-stateless-function': 0,
        'react/require-default-props': 0,
    },
    'settings': {
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
