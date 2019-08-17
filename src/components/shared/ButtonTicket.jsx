import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';

import { Button } from 'Components/shared/Button';

/**
 * @NOTE Using wildcard important to prevent tito from overriding our styles.
 *       We still want the user to be able to open the event in a new tab.
 */
const TitoButtonContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;

    * {
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        cursor: pointer !important;
    }
`;

export const ButtonTicket = ({
    children = 'Get tickets',
    ticketId,
    to,
    ...props
}) => {
    const handleClick = ev => {
        ev.preventDefault();
    };

    return (
        <Button position="relative" to={to} onClick={handleClick} {...props}>
            {children}
            <TitoButtonContainer>
                <tito-button event={`jsne/${ticketId}`} />
            </TitoButtonContainer>
        </Button>
    );
};

ButtonTicket.propTypes = {
    ...Button.propTypes,
    ticketId: PropTypes.string.isRequired,
};
