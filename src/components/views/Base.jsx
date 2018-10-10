/**
 * @module Base
 */

import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Generic unstyled view with `Helmet`
 */
const Base = ({
    children,
    description = 'We\'re an all things JavaScript meetup in Newcastle.',
    links = [],
    metas = [],
    scripts = [],
    title = 'JavaScript North East | JSNE',
    ...props
}) => (
    <main {...props}>
        <Helmet
            title={title}
            meta={[
                { name: 'description', content: description },
                { name: 'keywords', content: 'JavaScript, meet-up, JSNE' },
                { name: 'msapplication-TileColor', content: 'red' },
                { name: 'theme-color', content: 'blue' },
                ...metas,
            ]}
            link={[
                /* eslint-disable object-curly-newline */
                { href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css', rel: 'stylesheet prefetch preload', as: 'style' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'manifest', href: '/site.webmanifest' },
                { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#6030c6' },
                ...links,
                /* eslint-enable object-curly-newline */
            ]}
            script={scripts}
        />
        {children}
    </main>
);

Base.propTypes = {
    children: PropTypes.node.isRequired,
    description: PropTypes.string,
    links: PropTypes.array,
    metas: PropTypes.array,
    scripts: PropTypes.array,
    title: PropTypes.string,
};

export default Base;
