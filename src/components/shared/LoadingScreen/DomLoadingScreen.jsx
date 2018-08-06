/**
 * @module DomLoadingScreen
 * @desc LoadingScreen component bound to dom ready event
 */

import React, { Component } from 'react';
import styled from 'react-emotion';

import { transition } from 'Styles/tools';

import LoadingScreen from './LoadingScreen';

const DomLoadingScreenRoot = styled.div`
    ${transition('opacity')};
    opacity: ${props => props.isReady ? 0 : 1};
    pointer-events: ${props => props.isReady ? 'none' : 'auto'};
`;

class DomLoadingScreen extends Component {
    state = {
        isReady: false,
    };

    componentWillMount() {
        window.addEventListener('DOMContentLoaded', this.handleReady, { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener(this.handleReady);
    }

    handleReady = (/* ev */) => {
        this.setState({ isReady: true });
    };

    render() {
        const { isReady } = this.state;

        return (
            <DomLoadingScreenRoot isReady={isReady}>
                <LoadingScreen />
            </DomLoadingScreenRoot>
        );
    }
}

export default DomLoadingScreen;
