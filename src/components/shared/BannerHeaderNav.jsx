import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

import { listCleanCss } from 'Styles/utils';

import { Button } from 'Components/shared/Button';

const BannerHeaderNavToggle = styled(Button)`
    color: ${props => props.theme.color.brand1Base};
`;

const BannerHeaderNavRoot = styled.nav``;

const BannerHeaderNavList = styled.ul`
    ${listCleanCss}
`;

// const BannerHeaderNavListItem = styled.li``;

export const BannerHeaderNav = ({ toggleButtonLabel = 'Toggle', ...props }) => {
    return (
        <BannerHeaderNavRoot role="navigation" {...props}>
            <BannerHeaderNavToggle href="#">
                {toggleButtonLabel}
            </BannerHeaderNavToggle>
            <BannerHeaderNavList>
                {/* <BannerHeaderNavListItem></BannerHeaderNavListItem> */}
            </BannerHeaderNavList>
        </BannerHeaderNavRoot>
    );
};

BannerHeaderNav.propTypes = {
    toggleButtonLabel: PropTypes.string,
};
