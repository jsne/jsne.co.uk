/**
 * @module HomeHero
 * @desc Full width/height hero split into two sections
 */

import { css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import Header from '../shared/Header';

import { colors, breakpoints, spacingUnits } from '../../styles/settings';

import {
    primary as primaryBackground,
    secondary as secondaryBackground,
} from '../../styles/background';

import {
    h2, h3, primary as primaryText, primaryShadow, spaced,
} from '../../styles/text';
import { primaryLarge as buttonPrimaryLargeClassName } from '../../styles/button';

const className = css`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media(min-width: 1400px) {
        min-height: 100vh;
    }
`;

const classNameHeader = css`
    flex-shrink: 0;
`;

const classNameInner = css`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    @media(min-width: 1400px) {
        flex-direction: row;
    }
`;

const classNameSection = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    text-align: center;

    @media(min-width: ${breakpoints.high}) {
        padding-top: 5rem;
        padding-bottom: 5rem;
    }

    @media(min-width: 1400px) {
        width: 50%;
        align-items: flex-start;
        padding-left: 2rem;
        padding-right: 2rem;
        text-align: left;
    }

    @media(min-width: 1900px) {
        padding-left: 3rem;
        padding-right: 3rem;
    }
`;

const classNameSectionInner = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: calc(${breakpoints.maximum} / 2);

    @media(min-width: 1400px) {
        align-items: flex-start;
        margin-top: 4rem; /* @HACK ~ height of header */
    }
`;

const classNameSectionText = css`
    ${spaced};
    max-width: 40rem;
`;

const classNameSectionInnerPrimary = css`
    @media(min-width: ${breakpoints.maximum}) {
        align-self: flex-end;
    }
`;

const classNamePrimaryTitle = css`
    ${primaryText};
    margin-bottom: ${spacingUnits.whole};
    font-size: 3.5rem;
    color: ${colors.secondaryDark};

    @media(min-width: 1400px) {
        font-size: 4rem;

        span {
            display: block;
        }
    }

    @media(min-width: 1900px) {
        font-size: 4.5rem;
    }
`;

const classNameSecondaryTitle = css`
    ${primaryShadow};
    ${h2};

    @media(min-width: 1400px) {
        font-size: 3rem;
    }
`;

const classNameSecondaryPreTitle = css`
    color: ${colors.secondaryTitle};
`;

const classNameInfos = css`
    display: flex;
    align-items: center;
`;

const classNameInfosItem = css`
    margin-bottom: ${spacingUnits.whole};
    margin-right: ${spacingUnits.whole};

    &:last-of-type {
        margin-right: 0;
    }
`;

const classNameMarginBottom = css`
    margin-bottom: 1.25rem;

    @media(min-width: 1400px) {
        margin-bottom: 1.5rem;
    }
`;

// const classNameTitoButton = css`
//     button {
//         ${buttonPrimaryLargeClassName};
//     }
// `;

class HomeHero extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { titoLoaded: false };
    // }

    // componentWillMount() {
    //     if (typeof window !== 'undefined') {
    //         window.titoWidgetCallback = () => {
    //             this.setState({ titoLoaded: true });
    //         };
    //     }
    // }

    render() {
        const { primary, secondary, eventInfo } = this.props;
        return (
            <div className={className}>
                <div className={classNameHeader}>
                    <Header type="home" />
                </div>
                <div className={classNameInner}>
                    <section className={`${classNameSection} ${primaryBackground}`}>
                        <div className={`${classNameSectionInner} ${classNameSectionInnerPrimary}`}>
                            <h1 className={classNamePrimaryTitle}>{primary.title}</h1>
                            <p className={classNameSectionText}>{primary.text}</p>
                        </div>
                    </section>
                    <section className={`${classNameSection} ${secondaryBackground}`}>
                        <div className={classNameSectionInner}>
                            <h1>
                                <div className={`${h3} ${classNameSecondaryPreTitle}`}>
                                    {secondary.preTitle}
                                </div>
                                <div className={classNameSecondaryTitle}>{secondary.title}</div>
                            </h1>
                            <div className={`${classNameMarginBottom} ${classNameSectionText}`} dangerouslySetInnerHTML={{ __html: secondary.text }} />
                        </div>
                        <div className={classNameInfos}>
                            {secondary.infos.map((info, i) => (
                                <div
                                    key={i}
                                    className={`${classNameInfosItem} ${classNameMarginBottom}`}
                                >
                                    {info}
                                </div>
                            ))}
                        </div>

                        <a
                            className={buttonPrimaryLargeClassName}
                            href={`https://ti.to/jsne/${eventInfo.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Get Tickets
                        </a>


                    </section>
                </div>
            </div>
        );
    }
}

HomeHero.propTypes = {
    primary: PropTypes.object.isRequired,
    secondary: PropTypes.object.isRequired,
    eventInfo: PropTypes.object.isRequired,
};

export default HomeHero;
