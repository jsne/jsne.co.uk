/* eslint-disable shopify/jsx-no-complex-expressions */

import 'Styles/vendor.css';

import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import Helmet from 'react-helmet';
import React from 'react';

import { globalCss } from 'Styles/global';
import { theme } from 'Styles/theme';

const RootTemplateChildContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    min-height: 100vh;
    scroll-behavior: smooth;
`;

/**
 * Root template for all pages
 */
export const RootTemplate = ({
    childrenReplaceContainer,
    children,
    description = "We're the all things JavaScript meetup in Newcastle.",
    link = [],
    meta = [],
    script = [],
    title = 'JavaScript North East | JSNE',
    ...props
}) => (
    <ThemeProvider theme={theme} {...props}>
        <>
            <Global styles={globalCss(theme)} />
            <Helmet
                title={title}
                meta={[
                    { name: 'description', content: description },
                    { name: 'keywords', content: 'JavaScript, meet-up, JSNE' },
                    {
                        name: 'msapplication-TileColor',
                        content: theme.color.primaryBase,
                    },
                    { name: 'theme-color', content: theme.color.primaryBase },
                    ...meta,
                ]}
                link={[
                    {
                        rel: 'apple-touch-icon',
                        sizes: '180x180',
                        href: '/apple-touch-icon.png',
                    },
                    {
                        rel: 'icon',
                        type: 'image/png',
                        sizes: '32x32',
                        href: '/favicon-32x32.png',
                    },
                    {
                        rel: 'icon',
                        type: 'image/png',
                        sizes: '16x16',
                        href: '/favicon-16x16.png',
                    },
                    { rel: 'manifest', href: '/site.webmanifest' },
                    {
                        rel: 'mask-icon',
                        href: '/safari-pinned-tab.svg',
                        color: theme.color.brand0Base,
                    },
                    ...link,
                ]}
                script={script}
            />
            {childrenReplaceContainer ? (
                children
            ) : (
                <RootTemplateChildContainer>
                    {children}
                </RootTemplateChildContainer>
            )}
        </>
    </ThemeProvider>
);

RootTemplate.propTypes = {
    children: PropTypes.node.isRequired,
    childrenReplaceContainer: PropTypes.bool,
    description: PropTypes.string,
    link: PropTypes.arrayOf(PropTypes.object),
    meta: PropTypes.arrayOf(PropTypes.object),
    script: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
};
