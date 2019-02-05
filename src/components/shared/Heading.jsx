/**
 * @module Heading
 * @desc Standard heading components
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

const AnchorHeadingRoot = styled('div')`
    position: relative;
`;

const AnchorHeadingAnchor = styled('a')`
    margin-right: .5rem;
`;

export const BaseAnchorHeading = ({
    anchor,
    children,
    ...props
}) => {
    // Fallback ID to safe and friendly(ish) string
    const id = anchor || String(children).replace(/[^\w\s]/gi, '').replace(/ /g, '-').toLowerCase();

    return (
        <AnchorHeadingRoot id={id} {...props}>
            <AnchorHeadingAnchor href={`#${id}`}>#</AnchorHeadingAnchor>
            {children}
        </AnchorHeadingRoot>
    );
};

BaseAnchorHeading.propTypes = {
    anchor: PropTypes.string,
    children: PropTypes.node,
};

// @NOTE Wrapping component since emotion 9 doesn't support `as` prop
export const H1 = styled(({ className, ...props }) => (
    <h1 className={className}><BaseAnchorHeading as="h1" {...props} /></h1>
))`
    color: red;
`;

export const H2 = styled(({ className, ...props }) => (
    <h2 className={className}><BaseAnchorHeading as="h1" {...props} /></h2>
))`
    color: blue;
`;

export const H3 = styled(({ className, ...props }) => (
    <h3 className={className}><BaseAnchorHeading as="h1" {...props} /></h3>
))`
    color: rebeccapurple;
`;
