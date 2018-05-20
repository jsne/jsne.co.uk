/**
 * @module footer
 * @desc main footer for app
 */

import { css } from 'emotion';
import Link from 'gatsby-link';
import React from 'react';

import { colors, lineHeights } from '../../../styles/settings';
import containerClassName from '../../../styles/container';
import { secondaryDark as backgroundClassName } from '../../../styles/background';

const navItemClassName = css`
	line-height: ${lineHeights.single};
	color: ${colors.primary};

	&:hover,
	&:active {
		color: ${colors.secondaryDark};
	}
`;

const Header = () => (
	<footer className={backgroundClassName}>
		<small className={containerClassName}>
			<Link
				to="/"
				className={navItemClassName}
			>
				GitHub
			</Link>
		</small>
	</footer>
);

export default Header;
