/**
 * @module GenericContent
 */

import React from 'react';

import Base from 'Components/views/Base';

import Header from 'Components/shared/Header';

/**
 * Generic Content Page
 */
const GenericContent = ({ children, slug, ...props }) => (
    <Base {...props}>
        <Header />
        {children}
    </Base>
);

export default GenericContent;
