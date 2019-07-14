import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';

import { BannerHeader } from 'Components/shared/BannerHeader';
import { headingCssFont } from 'Components/shared/Heading';
import { Wrapper } from 'Components/shared/Wrapper';

const HomeHeroRoot = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const HomeHeroInner = styled.div`
    flex-grow: 1;
    width: 100%;
    margin-right: auto;
    margin-left: auto;

    ${props => props.theme.mediaQuery.maximum`
        display: flex;
    `}
`;

const HomeHeroHeader = styled(BannerHeader)`
    ${props => props.theme.mediaQuery.higher}
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

const HomeHeroSection = ({ alignLeft, children, ...props }) => {
    return (
        <HomeHeroSectionRoot {...props}>
            <HomeHeroSectionInner alignLeft={alignLeft}>
                {children}
            </HomeHeroSectionInner>
        </HomeHeroSectionRoot>
    );
};

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
    ${headingCssFont}
    font-size: ${props => props.theme.fontSize.large};
`;
const HomeHeroSectionSecondaryTitleMain = styled.div``;

export const HomeHero = ({ sectionPrimary, sectionSecondary, ...props }) => {
    return (
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
};

HomeHero.propTypes = {
    sectionPrimary: PropTypes.object.isRequired,
    sectionSecondary: PropTypes.object.isRequired,
};
