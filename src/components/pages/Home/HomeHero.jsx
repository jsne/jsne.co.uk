import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

import { BannerHeader } from 'Components/shared/BannerHeader';
import {
    BannerHeaderNavRoot,
    BannerHeaderNavListItemLink,
} from 'Components/shared/BannerHeaderNav';
import { Heading } from 'Components/shared/Heading';
import { Text } from 'Components/shared/Text';
import { Wrapper } from 'Components/shared/Wrapper';

const HomeHeroRoot = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const HomeHeroInner = styled.div`
    ${props => props.theme.mediaQuery.highest`
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        flex-direction: row;
    `}
`;

const HomeHeroHeader = styled(BannerHeader)`
    ${props => props.theme.mediaQuery.highest`
        background-image: linear-gradient(
            to right,
            ${props.theme.colors.brandPrimaryBase} 50%,
            ${props.theme.colors.brandSecondaryBase} 50%
        );

        ${BannerHeaderNavRoot} {
            background-color: ${props.theme.colors.brandSecondaryBase};
            padding-right: 0;
        }

        ${BannerHeaderNavListItemLink} {
            color: ${props.theme.colors.brandSecondaryContrast};

            &:hover,
            &:focus {
                color: ${props.theme.colors.brandPrimaryBase};
            }
        }
    `}
`;

const HomeHeroSectionRoot = styled(props => <Wrapper fluid {...props} />)`
    display: flex;
    flex-direction: column;
    padding-top: ${props => props.theme.space.whole};
    padding-bottom: ${props => props.theme.space.whole};

    ${props => props.theme.mediaQuery.highest`
        justify-content: center;
    `}
`;

const HomeHeroSectionInner = styled(props => (
    <Wrapper fluid marginX={false} padding {...props} />
))`
    ${props => props.theme.mediaQuery.highest`
        width: 100%;
        max-width: calc(${props.theme.breakpoints.highest} / 2);

        ${css(
            props.alignLeft
                ? `
                margin-left: auto;
                padding-right: ${props.theme.space.double};
            `
                : `
                padding-left: ${props.theme.space.double};
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
    background-color: ${props => props.theme.colors.brandPrimaryBase};
    color: ${props => props.theme.colors.brandPrimaryContrast};
`;

const HomeHeroSectionPrimaryTitle = styled(Heading)`
    font-size: ${props => props.theme.fontSizes.largest};

    ${props => props.theme.mediaQuery.low`
        font-size: ${props.theme.fontSizes.hero};
    `}
`;

const HomeHeroSectionSecondary = styled(HomeHeroSection)`
    background-color: ${props => props.theme.colors.brandSecondaryBase};
    color: ${props => props.theme.colors.brandSecondaryContrast};
`;

const HomeHeroSectionSecondaryTitlePre = styled(Heading)`
    font-size: ${props => props.theme.fontSizes.medium};
`;

export const HomeHero = ({ sectionPrimary, sectionSecondary, ...props }) => (
    <HomeHeroRoot {...props}>
        <HomeHeroHeader />
        <HomeHeroInner>
            <HomeHeroSectionPrimary>
                <HomeHeroSectionPrimaryTitle as="h1" mb="threeQuarter">
                    {sectionPrimary.title}
                </HomeHeroSectionPrimaryTitle>
                <Text>{sectionPrimary.text}</Text>
            </HomeHeroSectionPrimary>

            <HomeHeroSectionSecondary as="section">
                <Text as="h1" mb="half">
                    <HomeHeroSectionSecondaryTitlePre as="div">
                        {sectionSecondary.preTitle}
                    </HomeHeroSectionSecondaryTitlePre>
                    <Heading
                        as={Link}
                        color="brandPrimaryBase"
                        hasShadow
                        to={sectionSecondary.to}
                    >
                        {sectionSecondary.title}
                    </Heading>
                </Text>
                <Text>
                    <MDXProvider
                        components={{
                            // eslint-disable-next-line id-length, react/display-name
                            a: p => (
                                <Text
                                    displayName="text"
                                    as="a"
                                    color="brandPrimaryBase"
                                    {...p}
                                />
                            ),
                        }}
                    >
                        {sectionSecondary.text}
                    </MDXProvider>
                </Text>
            </HomeHeroSectionSecondary>
        </HomeHeroInner>
    </HomeHeroRoot>
);

HomeHero.propTypes = {
    sectionPrimary: PropTypes.object.isRequired,
    sectionSecondary: PropTypes.object.isRequired,
};
