import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Logo from 'Assets/images/logo.svg';

import { Wrapper } from 'Components/shared/Wrapper';
import { BannerHeaderNav } from 'Components/shared/BannerHeaderNav';

const BannerHeaderRoot = styled(props => <header role="banner" {...props} />)`
    padding-top: ${props => props.theme.spacing.half};
    padding-bottom: ${props => props.theme.spacing.half};
    background-color: ${props => props.theme.color.brand0Base};
    color: ${props => props.theme.color.brand0Contrast};
`;

const BannerHeaderInner = styled(Wrapper)`
    position: relative;
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

    ${props => props.theme.mediaQuery.maximum`
        width: 5.25rem;
    `}
`;

const BannerHeaderLogo = ({ to = '/', ...props }) => (
    <BannerHeaderLogoRoot>
        <BannerHeaderLogoLink to={to} {...props}>
            <BannerHeaderLogoImage />
        </BannerHeaderLogoLink>
    </BannerHeaderLogoRoot>
);

BannerHeaderLogo.propTypes = {
    to: PropTypes.string,
};

export const BannerHeader = ({ /* children,*/ ...props }) => {
    return (
        <BannerHeaderRoot {...props}>
            <BannerHeaderInner paddingX>
                <BannerHeaderLogo alt="JSNE" />
                <BannerHeaderNav />
            </BannerHeaderInner>
        </BannerHeaderRoot>
    );
};

BannerHeader.propTypes = {
    children: PropTypes.node,
};
