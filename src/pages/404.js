import styled from '@emotion/styled';
import React from 'react';

import { RootTemplate } from 'Templates/RootTemplate';

const videoUrls = [
    '/assets/media/charlie-im-so-sorry.mp4',
    '/assets/media/charlie-what-do-now.mp4',
    '/assets/media/frank-egg-limo.mp4',
    '/assets/media/frank-whoops.mp4',
];

const NotFoundPageVideo = styled.video`
    width: 100%;
`;

const NotFoundPageCta = styled.a`
    color: ${props => props.theme.color.brand1Base};
`;

const NotFoundPageGroup = styled.div`
    margin-bottom: ${props => props.theme.spacing.double};
    text-align: center;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

const NotFoundPageRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    min-width: 100%;
    padding: ${props => props.theme.spacing.base};
`;

const NotFoundPage = () => {
    const videoUrl = videoUrls[(videoUrls.length * Math.random()) | 0];

    /* eslint-disable shopify/jsx-no-hardcoded-content */
    return (
        <RootTemplate
            childrenReplaceContainer
            title="Not found"
            description="Unable to find page"
        >
            <NotFoundPageRoot>
                <NotFoundPageGroup>
                    <h1>Not Found</h1>
                </NotFoundPageGroup>
                <NotFoundPageGroup>
                    <NotFoundPageVideo loop autoPlay mute src={videoUrl} />
                </NotFoundPageGroup>
                <NotFoundPageGroup>
                    <p>Move along, nothing to see here.</p>
                    <NotFoundPageCta href="/">Homepage</NotFoundPageCta>
                </NotFoundPageGroup>
            </NotFoundPageRoot>
        </RootTemplate>
    );
    /* eslint-enable shopify/jsx-no-hardcoded-content */
};

export default NotFoundPage;
