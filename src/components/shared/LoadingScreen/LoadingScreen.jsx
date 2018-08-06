/**
 * @module LoadingScreen
 * @desc portal overlay for page load
 */

import React from 'react';
import styled from 'react-emotion';

import { colors } from 'Styles/settings';

import LogoSpinner from 'Components/shared/LogoSpinner';

const LoadingScreenRoot = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;;
    background-color: ${colors.light};
    z-index: 10;
`;

const LoadingScreen = () => (
    <LoadingScreenRoot><LogoSpinner /></LoadingScreenRoot>
);

export default LoadingScreen;
