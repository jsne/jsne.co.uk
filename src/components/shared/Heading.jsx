/**
 * @module Heading
 * @desc Standard heading components
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';

const AnchorHeadingRoot = styled('div')`
    display: flex;
    color: ${props => props.theme.color.uiPageForegroundBase};
`;

const AnchorHeadingAnchor = styled('a')`
    ${props => props.theme.transition.call('color')}
    margin-right: ${props => props.theme.spacing.half};
    color: ${props => props.theme.color.uiPageAnchorBase};

    &:hover,
    &:focus {
        color: ${props => props.theme.color.uiPageAnchorActive};
    }
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
    font-size: ${props => props.theme.fontSize.larger};
`;

export const H2 = styled(({ className, ...props }) => (
    <h2 className={className}><BaseAnchorHeading as="h1" {...props} /></h2>
))`
    font-size: ${props => props.theme.fontSize.large};
`;

export const H3 = styled(({ className, ...props }) => (
    <h3 className={className}><BaseAnchorHeading as="h1" {...props} /></h3>
))`
    font-size: ${props => props.theme.fontSize.medium};
`;
