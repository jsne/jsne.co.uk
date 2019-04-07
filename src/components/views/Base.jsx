/**
 * @module Base
 */

import { ThemeProvider } from 'emotion-theming';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';

import theme from 'Styles/theme';

import 'Static/styles.css';

/**
 * Generic unstyled view with `Helmet`
 */
const Base = ({
    children,
    description = 'We\'re an all things JavaScript meetup in Newcastle Upon Tyne.',
    links = [],
    metas = [],
    scripts = [],
    title = 'JavaScript North East | JSNE',
    ...props
}) => (
    <ThemeProvider theme={theme} {...props}>
        <>
            <Helmet
                title={title}
                meta={[
                    { name: 'description', content: description },
                    { name: 'keywords', content: 'JavaScript, meet-up, JSNE' },
                    { name: 'msapplication-TileColor', content: theme.color.uiPrimaryBase },
                    { name: 'theme-color', content: theme.color.uiPrimaryBase },
                    ...metas,
                ]}
                link={[
                    /* eslint-disable object-curly-newline */
                    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                    { rel: 'manifest', href: '/site.webmanifest' },
                    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: theme.color.uiSecondaryBase },
                    ...links,
                    /* eslint-enable object-curly-newline */
                ]}
                script={scripts}
            />
            {children}
        </>
    </ThemeProvider>
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
