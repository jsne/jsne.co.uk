import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from '@emotion/styled';

import { usePageQueryAllNavFormatted } from 'Graphql/page';

import { listCleanCss } from 'Styles/utils';

import IconBars from 'Assets/images/icon-bars.svg';

import { Button } from 'Components/shared/Button';

const BannerHeaderNavToggle = styled(props => (
    <Button as="button" {...props} />
))`
    padding: ${props =>
        `${props.theme.spacing.eighth} ${props.theme.spacing.quarter}`};
    color: ${props => props.theme.color.brand1Base};

    ${props => props.theme.mediaQuery.high`
        display: none;
    `}
`;

const BannerHeaderNavToggleIcon = styled(IconBars)`
    width: 1.75rem;
    fill: currentColor;
`;

const BannerHeaderNavRoot = styled.nav`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    ${props => props.theme.mediaQuery.high`
        padding: ${props.theme.spacing.threeQuarter} ${props.theme.spacing.base};
        background-color: ${props.theme.color.brand0Base};
        border-radius: ${props.theme.border.radius0};
    `}
`;

const BannerHeaderNavListRoot = styled.ul`
    ${listCleanCss}
    display: ${props => (props.isExpanded ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    right: 0;

    ${props => props.theme.mediaQuery.high`
        position: static;
        display: grid;
        grid-auto-flow: column;
        grid-gap: ${props.theme.spacing.base};
    `}
`;

const BannerHeaderNavListItemLink = styled.a`
    ${props => props.theme.mediaQuery.high`
        font-weight: ${props.theme.fontWeight.base1};
    `}
`;

const BannerHeaderNavListItem = ({
    navigationLabel,
    path,
    title,
    ...props
}) => (
    <li {...props}>
        <BannerHeaderNavListItemLink href={path} title={title}>
            {navigationLabel}
        </BannerHeaderNavListItemLink>
    </li>
);

BannerHeaderNavListItem.propTypes = {
    navigationLabel: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

const BannerHeaderNavList = ({ isExpanded, navItems, ...props }) => (
    <BannerHeaderNavListRoot isExpanded={isExpanded} {...props}>
        {navItems.map(item => (
            <BannerHeaderNavListItem key={item.slug} {...item} />
        ))}
    </BannerHeaderNavListRoot>
);

BannerHeaderNavList.propTypes = {
    isExpanded: PropTypes.bool,
    navItems: PropTypes.arrayOf(PropTypes.object),
};

export const BannerHeaderNav = ({
    navMenuId = 'banner-header-nav-menu',
    toggleButtonLabel = 'Navigation',
    ...props
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const navItems = usePageQueryAllNavFormatted();

    const handleToggleClick = (/* ev*/) => {
        setIsExpanded(!isExpanded);
    };

    return (
        <BannerHeaderNavRoot role="navigation" {...props}>
            <BannerHeaderNavToggle
                onClick={handleToggleClick}
                aria-controls={navMenuId}
                aria-expanded={isExpanded}
                aria-label={toggleButtonLabel}
            >
                <BannerHeaderNavToggleIcon role="presentation" />
            </BannerHeaderNavToggle>
            <BannerHeaderNavList
                id={navMenuId}
                isExpanded={isExpanded}
                navItems={navItems}
            />
        </BannerHeaderNavRoot>
    );
};

BannerHeaderNav.propTypes = {
    navMenuId: PropTypes.string,
    toggleButtonLabel: PropTypes.string,
};
