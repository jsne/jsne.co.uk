/**
 * @module background
 * @desc shared background-color/color combinations
 */

import { css } from 'emotion';

import { colors } from './settings';

export const primary = css`
	background-color: ${colors.primary};
	color: ${colors.primaryText};
`;

export const secondary = css`
	background-color: ${colors.secondary};
	color: ${colors.secondaryText};
`;

export const secondaryDark = css`
	background-color: ${colors.secondaryDark};
	color: ${colors.secondaryText};
`;

export const good = css`
	background-color: ${colors.good};
	color: ${colors.light};
`;

export const bad = css`
	background-color: ${colors.bad};
	color: ${colors.light};
`;

export const ugly = css`
	background-color: ${colors.ugly};
	color: ${colors.light};
`;

export const info = css`
	background-color: ${colors.info};
	color: ${colors.text};
`;
