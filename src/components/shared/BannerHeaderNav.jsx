import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

import { usePageQueryAllNavFormatted } from 'Graphql/page';

import { listCleanCss } from 'Styles/utils';

import { Button } from 'Components/shared/Button';

const BannerHeaderNavToggle = styled(props => (
    <Button as="button" {...props} />
))`
    color: ${props => props.theme.color.brand1Base};
`;

const BannerHeaderNavRoot = styled.nav``;

const BannerHeaderNavListRoot = styled.ul`
    ${listCleanCss}
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

const BannerHeaderNavList = ({ navItems, ...props }) => (
    <BannerHeaderNavListRoot {...props}>
        {navItems.map(item => (
            <BannerHeaderNavListItem key={item.slug} {...item} />
        ))}
    </BannerHeaderNavListRoot>
);

BannerHeaderNavList.propTypes = {
    navItems: PropTypes.arrayOf(PropTypes.object),
};

export const BannerHeaderNav = ({ toggleButtonLabel = 'Toggle', ...props }) => {
    const navItems = usePageQueryAllNavFormatted();
    return (
        <BannerHeaderNavRoot role="navigation" {...props}>
            <BannerHeaderNavToggle href="#">
                {toggleButtonLabel}
            </BannerHeaderNavToggle>
            <BannerHeaderNavList navItems={navItems} />
        </BannerHeaderNavRoot>
    );
};

BannerHeaderNav.propTypes = {
    toggleButtonLabel: PropTypes.string,
};
