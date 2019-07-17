import { css } from '@emotion/core';
import React from 'react';

import { visuallyHiddenCss } from 'Styles/utils';

export const VisuallyHidden = props => (
    <div css={css(visuallyHiddenCss())} {...props} />
);
