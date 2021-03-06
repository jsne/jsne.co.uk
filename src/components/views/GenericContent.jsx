/**
 * @module GenericContent
 */

// @HACK Using MDX runtime - 'gatsby-mdx' doesn't seem to work
import MDX from '@mdx-js/runtime/src/index';
import React from 'react';

import Base from 'Components/views/Base';

import Footer from 'Components/shared/Footer';
import Header from 'Components/shared/Header';
import { H1, H2, H3 } from 'Components/shared/Heading';
import LayoutRoot from 'Components/shared/Layout/LayoutRoot';
import Link from 'Components/shared/Link';
import Page from 'Components/shared/Page';
import Wrapper from 'Components/shared/Wrapper';

/**
 * Components to replace standard elements created from markdown
 */
export const components = {
    a: props => <Link {...props} />,
    h1: props => <H1 {...props} />,
    h2: props => <H2 {...props} />,
    h3: props => <H3 {...props} />,
};

/**
 * Generic Content Page
 */
const GenericContent = ({ children, slug, ...props }) => (
    <Base {...props}>
        <LayoutRoot>
            <Header activePage={slug} />
            <Wrapper padded withResponsiveHeader>
                <Page breakWord>
                    <MDX components={components}>{children}</MDX>
                </Page>
            </Wrapper>
            <Footer />
        </LayoutRoot>
    </Base>
);

export default GenericContent;
