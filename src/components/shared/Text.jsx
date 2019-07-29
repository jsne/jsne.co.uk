import React from 'react';
import { Box } from 'Components/shared/Box';

export const Text = props => <Box as="p" {...props} />;

Text.defaultProps = {
    ...Box.defaultProps,
    lineHeight: 3,
};
