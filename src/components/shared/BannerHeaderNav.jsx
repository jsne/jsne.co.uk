import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from '@emotion/styled';

import { usePageQueryAllNavFormatted } from 'Graphql/page';

import { listCleanCss } from 'Styles/utils';

import IconBars from 'Assets/images/icon-bars.svg';

import { Button } from 'Components/shared/Button';
import { VisuallyHidden } from 'Components/shared/VisuallyHidden';

const BannerHeaderNavToggle = styled(props => (
    <Button as="button" {...props} />
))`
    padding: ${props =>
        `${props.theme.spacing.eighth} ${props.theme.spacing.quarter}`};
    color: ${props => props.theme.color.brand1Base};
`;

const BannerHeaderNavToggleIcon = styled(IconBars)`
    width: 1.75rem;
    fill: currentColor;
`;

const BannerHeaderNavRoot = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const BannerHeaderNavListRoot = styled.ul`
    ${listCleanCss}
    display: ${props => (props.isExpanded ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    right: 0;
`;

const BannerHeaderNavListItemRoot = styled.li``;

const BannerHeaderNavListItemLink = styled.a``;

const BannerHeaderNavListItem = ({
    navigationLabel,
    path,
    title,
    ...props
}) => (
    <BannerHeaderNavListItemRoot {...props}>
        <BannerHeaderNavListItemLink href={path} title={title}>
            {navigationLabel}
        </BannerHeaderNavListItemLink>
    </BannerHeaderNavListItemRoot>
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

export const BannerHeaderNav = ({ toggleButtonLabel = 'Toggle', ...props }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const navItems = usePageQueryAllNavFormatted();

    const handleToggleClick = (/* ev*/) => {
        setIsExpanded(!isExpanded);
    };

    return (
        <BannerHeaderNavRoot role="navigation" {...props}>
            <BannerHeaderNavToggle
                onClick={handleToggleClick}
                aria-expanded={isExpanded}
            >
                <BannerHeaderNavToggleIcon role="presentation" />
                <VisuallyHidden>{toggleButtonLabel}</VisuallyHidden>
            </BannerHeaderNavToggle>
            <BannerHeaderNavList isExpanded={isExpanded} navItems={navItems} />
        </BannerHeaderNavRoot>
    );
};

BannerHeaderNav.propTypes = {
    toggleButtonLabel: PropTypes.string,
};
