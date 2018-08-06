/**
 * @module footer
 * @desc main footer for app
 */

import { css } from 'emotion';
import React from 'react';

import config from 'Root/config';

import { colors, fontSizes, lineHeights, spacingUnits } from 'Styles/settings';
import containerClassName from 'Styles/container';
import { secondaryDark as backgroundClassName } from 'Styles/background';

import IconText from 'Components/shared/IconText';
import GitHubIcon from 'Components/shared/Icons/GitHub';

const primaryClassName = css`
    padding: ${spacingUnits.half};
    font-size: ${fontSizes.small};
`;

const innerClassname = css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const navItemClassName = css`
    line-height: ${lineHeights.single};
    color: ${colors.primary};

    &:hover,
    &:active {
        color: ${colors.light};
    }
`;

const Header = () => (
    <footer className={`${primaryClassName} ${backgroundClassName}`}>
        <div className={`${containerClassName} ${innerClassname}`}>
            <IconText
                className={navItemClassName}
                target="_blank"
                to={config.addresses.source}
                icon={<GitHubIcon />}
                text="View Source on GitHub"
            />
        </div>
    </footer>
);

export default Header;
