import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import smoothscroll from 'smoothscroll-polyfill';

import { colors } from '../styles/settings';

import Content from '../components/shared/Content';
import Footer from '../components/shared/Footer';
import Root from '../components/shared/Root';

if (typeof window !== 'undefined') {
    smoothscroll.polyfill();
}

if (process.env.NODE_ENV === 'development') {
    require('../../static/styles.css');
}

const TemplateWrapper = ({ children }) => ([
    <Helmet
        key="helmet"
        title="JavaScript North East | JSNE"
        meta={[
            { name: 'description', content: 'We\'re an all things JavaScript meetup in Newcastle.' },
            { name: 'keywords', content: 'JavaScript, meet-up, JSNE' },
            { name: 'msapplication-TileColor', content: colors.primary },
            { name: 'theme-color', content: colors.primary },
        ]}
        link={[
            /* eslint-disable object-curly-newline */
            { href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css', rel: 'stylesheet prefetch preload', as: 'style' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
            { rel: 'manifest', href: '/site.webmanifest' },
            { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#6030c6' },
            /* eslint-enable object-curly-newline */
        ]}
    >
        <script src="https://js.tito.io/v1" async />
    </Helmet>,

    <Root key="root">
        <Content>
            {children()}
        </Content>
        <Footer />
    </Root>,
]);

TemplateWrapper.propTypes = {
    children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
