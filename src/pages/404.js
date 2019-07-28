import styled from '@emotion/styled';
import React from 'react';

import { RootTemplate } from 'Templates/RootTemplate';

import { Button } from 'Components/shared/Button';

import video1 from 'Static/assets/media/charlie-im-so-sorry.mp4';
import video2 from 'Static/assets/media/charlie-what-do-now.mp4';
import video3 from 'Static/assets/media/frank-egg-limo.mp4';
import video4 from 'Static/assets/media/frank-whoops.mp4';

const NotFoundPageVideo = styled.video`
    width: 100%;
`;

const NotFoundPageGroup = styled.div`
    margin-bottom: ${props => props.theme.space.double};
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
    padding: ${props => props.theme.space.whole};
`;

const getRandomVideoUrl = () => {
    const videoUrls = [video1, video2, video3, video4];
    const videoUrlIndex = (videoUrls.length * Math.random()) | 0;

    return videoUrls[videoUrlIndex];
};

const NotFoundPage = () => {
    let videoUrl = getRandomVideoUrl();

    if (typeof window !== 'undefined') {
        videoUrl = getRandomVideoUrl();
    }

    /* eslint-disable shopify/jsx-no-hardcoded-content */
    return (
        <RootTemplate
            childrenReplaceContainer
            title="Not found"
            description="Unable to find page"
            meta={[{ name: 'robots', content: 'noindex, nofollow' }]}
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
                    <Button href="/">Homepage</Button>
                </NotFoundPageGroup>
            </NotFoundPageRoot>
        </RootTemplate>
    );
    /* eslint-enable shopify/jsx-no-hardcoded-content */
};

export default NotFoundPage;
