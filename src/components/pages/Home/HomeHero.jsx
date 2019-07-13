import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import React from 'react';

const HomeHeroRoot = styled.section`
    color: green;
`;

const HomeHeroHeader = styled.nav``;

export const HomeHero = ({
    data,
    sectionPrimary,
    sectionSecondary,
    ...props
}) => {
    return (
        <HomeHeroRoot {...props}>
            <HomeHeroHeader />
            <HomeHeroSectionPrimary {...sectionPrimary} />
            <HomeHeroSectionSecondary {...sectionSecondary} />
        </HomeHeroRoot>
    );
};

HomeHero.propTypes = {
    data: PropTypes.object.isRequired,
    sectionPrimary: PropTypes.object.isRequired,
    sectionSecondary: PropTypes.object.isRequired,
};
