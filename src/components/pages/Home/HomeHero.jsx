import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

import { listCleanCss } from 'Styles/utils';

import { BannerHeader } from 'Components/shared/BannerHeader';
import {
    BannerHeaderNavRoot,
    BannerHeaderNavListItemLink,
} from 'Components/shared/BannerHeaderNav';
import { Box } from 'Components/shared/Box';
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
    ${props => props.theme.mediaQuery.medium`
        ${BannerHeaderNavListItemLink} {
            color: ${props.theme.colors.brandSecondaryBase};

            &:hover,
            &:focus {
                color: ${props.theme.colors.brandSecondaryBases[3]};
            }
        }
    `}

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
    padding-top: ${props => props.theme.space.wholeHalf};
    padding-bottom: ${props => props.theme.space.wholeHalf};

    ${props => props.theme.mediaQuery.low`
        padding-top: ${props.theme.space.double};
        padding-bottom: ${props.theme.space.double};
    `}

    ${props => props.theme.mediaQuery.highest`
        justify-content: center;
    `}
`;

const HomeHeroSectionInner = styled(props => (
    <Wrapper fluid marginX={false} paddingX {...props} />
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

const HomeHeroSectionSeondaryInfos = styled.ul`
    ${listCleanCss};
    display: grid;
    grid-auto-flow: column;
    grid-gap: ${props => props.theme.space.wholeHalf};
    justify-content: flex-start;
    align-items: center;
    margin-bottom: ${props => props.theme.space.whole};
`;

const HomeHeroSectionSeondaryInfosItem = styled.li`
    display: block;
`;

export const HomeHero = ({ sectionPrimary, sectionSecondary, ...props }) => (
    <HomeHeroRoot {...props}>
        <HomeHeroHeader />
        <HomeHeroInner>
            <HomeHeroSectionPrimary>
                <HomeHeroSectionPrimaryTitle as="h1" mb="threeQuarter">
                    {sectionPrimary.title}
                </HomeHeroSectionPrimaryTitle>
                <Text maxWidth="29rem">{sectionPrimary.text}</Text>
            </HomeHeroSectionPrimary>

            <HomeHeroSectionSecondary as="section">
                <Box maxWidth="medium">
                    <Text as="h1" mb="quarter">
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
                    <Text as="div" mb="wholeQuarter">
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
                            <MDXRenderer>{sectionSecondary.text}</MDXRenderer>
                        </MDXProvider>
                    </Text>
                    <HomeHeroSectionSeondaryInfos>
                        {sectionSecondary.infos.map(({ key, ...info }) => (
                            <HomeHeroSectionSeondaryInfosItem key={key}>
                                {info}
                            </HomeHeroSectionSeondaryInfosItem>
                        ))}
                    </HomeHeroSectionSeondaryInfos>
                </Box>
            </HomeHeroSectionSecondary>
        </HomeHeroInner>
    </HomeHeroRoot>
);

HomeHero.propTypes = {
    sectionPrimary: PropTypes.object.isRequired,
    sectionSecondary: PropTypes.object.isRequired,
};
