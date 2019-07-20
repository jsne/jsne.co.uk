import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

import { BannerHeader } from 'Components/shared/BannerHeader';
import {
    BannerHeaderNavRoot,
    BannerHeaderNavListItemLink,
} from 'Components/shared/BannerHeaderNav';
import { Wrapper } from 'Components/shared/Wrapper';

import { headingFontCss } from 'Styles/utils';

const HomeHeroRoot = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const HomeHeroInner = styled.div`
    ${props => props.theme.mediaQuery.maximum`
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        flex-direction: row;
    `}
`;

const HomeHeroHeader = styled(BannerHeader)`
    ${props => props.theme.mediaQuery.maximum`
        background-image: linear-gradient(
            to right,
            ${props.theme.color.brand0Base} 50%,
            ${props.theme.color.brand1Base} 50%
        );

        ${BannerHeaderNavRoot} {
            background-color: ${props.theme.color.brand1Base};
            padding-right: 0;
        }

        ${BannerHeaderNavListItemLink} {
            color: ${props.theme.color.brand1Contrast};

            &:hover,
            &:focus {
                color: ${props.theme.color.brand0Base};
            }
        }
    `}
`;

const HomeHeroSectionRoot = styled(props => <Wrapper fluid {...props} />)`
    display: flex;
    flex-direction: column;
    padding-top: ${props => props.theme.spacing.base};
    padding-bottom: ${props => props.theme.spacing.base};

    ${props => props.theme.mediaQuery.maximum`
        justify-content: center;
    `}
`;

const HomeHeroSectionInner = styled(props => (
    <Wrapper fluid marginX={false} padding {...props} />
))`
    ${props => props.theme.mediaQuery.maximum`
        width: 100%;
        max-width: calc(${props.theme.breakpoint.maximum} / 2);

        ${css(
            props.alignLeft
                ? `
                margin-left: auto;
                padding-right: ${props.theme.spacing.double};
            `
                : `
                padding-left: ${props.theme.spacing.double};
            `,
        )}
    `}
`;

const HomeHeroSection = ({ alignLeft, children, ...props }) => (
    <HomeHeroSectionRoot {...props}>
        <HomeHeroSectionInner alignLeft={alignLeft}>
            {children}
        </HomeHeroSectionInner>
    </HomeHeroSectionRoot>
);

HomeHeroSection.propTypes = {
    alignLeft: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

const HomeHeroSectionPrimary = styled(props => (
    <HomeHeroSection alignLeft {...props} />
))`
    background-color: ${props => props.theme.color.brand0Base};
    color: ${props => props.theme.color.brand0Contrast};
`;

const HomeHeroSectionPrimaryTitle = styled.h1`
    font-size: ${props => props.theme.fontSize.largest};
`;

const HomeHeroSectionSecondary = styled(HomeHeroSection)`
    background-color: ${props => props.theme.color.brand1Base};
    color: ${props => props.theme.color.brand1Contrast};
`;

const HomeHeroSectionSecondaryTitleRoot = styled.h1``;
const HomeHeroSectionSecondaryTitlePre = styled.div`
    ${headingFontCss}
    font-size: ${props => props.theme.fontSize.medium};
`;

const HomeHeroSectionSecondaryTitleMain = styled.div`
    color: ${props => props.theme.color.brand0Base};
`;

export const HomeHero = ({ sectionPrimary, sectionSecondary, ...props }) => (
    <HomeHeroRoot {...props}>
        <HomeHeroHeader />
        <HomeHeroInner>
            <HomeHeroSectionPrimary>
                <HomeHeroSectionPrimaryTitle>
                    {sectionPrimary.title}
                </HomeHeroSectionPrimaryTitle>
            </HomeHeroSectionPrimary>

            <HomeHeroSectionSecondary as="section">
                <HomeHeroSectionSecondaryTitleRoot>
                    <HomeHeroSectionSecondaryTitlePre primary={false}>
                        {sectionSecondary.preTitle}
                    </HomeHeroSectionSecondaryTitlePre>
                    <HomeHeroSectionSecondaryTitleMain>
                        {sectionSecondary.title}
                    </HomeHeroSectionSecondaryTitleMain>
                </HomeHeroSectionSecondaryTitleRoot>
            </HomeHeroSectionSecondary>
        </HomeHeroInner>
    </HomeHeroRoot>
);

HomeHero.propTypes = {
    sectionPrimary: PropTypes.object.isRequired,
    sectionSecondary: PropTypes.object.isRequired,
};
