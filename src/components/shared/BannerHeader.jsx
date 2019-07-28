import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Logo from 'Assets/images/logo.svg';

import { BannerHeaderNav } from 'Components/shared/BannerHeaderNav';
import { Wrapper } from 'Components/shared/Wrapper';

const BannerHeaderRoot = styled(props => <header role="banner" {...props} />)`
    padding-top: ${props => props.theme.space.half};
    padding-bottom: ${props => props.theme.space.half};
    background-color: ${props => props.theme.colors.brandPrimaryBase};
    color: ${props => props.theme.colors.brandPrimaryContrast};

    ${props => props.theme.mediaQuery.higher`
        padding-top: ${props.theme.space.whole};
        padding-bottom: ${props.theme.space.whole};
    `}
`;

const BannerHeaderInner = styled(Wrapper)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BannerHeaderLogoRoot = styled.h1``;
const BannerHeaderLogoLink = styled(Link)``;

const BannerHeaderLogoImage = styled(Logo)`
    width: 4rem;

    ${props => props.theme.mediaQuery.low`
        width: 4.5rem;
    `}

    ${props => props.theme.mediaQuery.high`
        width: 5rem;
    `}

    ${props => props.theme.mediaQuery.highest`
        width: 5.25rem;
    `}
`;

const BannerHeaderLogo = ({ to = '/', ...props }) => (
    <BannerHeaderLogoRoot>
        <BannerHeaderLogoLink to={to} {...props} aria-label="Homepage">
            <BannerHeaderLogoImage />
        </BannerHeaderLogoLink>
    </BannerHeaderLogoRoot>
);

BannerHeaderLogo.propTypes = {
    to: PropTypes.string,
};

export const BannerHeader = ({ /* children,*/ ...props }) => (
    <BannerHeaderRoot {...props}>
        <BannerHeaderInner paddingX>
            <BannerHeaderLogo alt="JSNE" />
            <BannerHeaderNav />
        </BannerHeaderInner>
    </BannerHeaderRoot>
);

BannerHeader.propTypes = {
    children: PropTypes.node,
};
