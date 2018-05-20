/**
 * @module container
 * @desc shared container that centers and pads content
 */

import { css } from 'emotion';

import { breakpoints, spacingUnits } from './settings';

const container = css`
	width: 100%;
	max-width: ${breakpoints.maximum};
	margin-right: auto;
	margin-left: auto;
	padding-left: ${spacingUnits.whole};
	padding-right: ${spacingUnits.whole};
`;

export default container;
