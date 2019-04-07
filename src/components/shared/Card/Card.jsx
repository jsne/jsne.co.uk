import { Link } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';
import slugify from 'slugify';

const CardRoot = styled('section')`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-width: 30rem;
    margin-bottom: ${props => props.theme.spacing.double};
    border-radius: ${props => props.theme.border.radiusBase};
    background-color: ${props => props.theme.color.uiPageBase};
    color: ${props => props.theme.color.uiPageContrastAlpha};
    box-shadow: .2rem .2rem 0 ${props => props.theme.color.uiSecondaryDark};
`;

const CardInner = styled('div')`
    padding: ${props => props.theme.spacing.base};
`;

const CardMedia = styled('div')`
    background-color: red;
`;

const CardMediaPrimary = styled('img')`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CardMediaItems = styled('ul')`
    display: flex;
    list-style: none;
`;

const CardMediaItemsItem = styled('li')`
    color: green;
`;

const CardPerson = styled('a')`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const CardPersonAvatar = styled('img')`
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    margin-bottom: ${props => props.theme.spacing.base};
`;

const CardPersonName = styled('div')`

`;

const CardTitle = styled(Link)`
    /* Full width/height element to cover entire card */
    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;

const CardTitleHeading = styled('h1')`
    font-size: ${props => props.theme.fontSize.large};
    font-style: italic;
    color: ${props => props.theme.color.uiSecondaryBase};
`;

const CardBody = styled('div')`
    margin-bottom: ${props => props.theme.spacing.base};
`;

const CardCtas = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Card = ({
    body,
    ctaPrimary,
    ctaSecondary,
    media,
    mediaItems,
    person,
    slug,
    title,
    ...props
}) => {
    const titleId = `events-item-${slugify(title, { lower: true })}`;

    return (
        <CardRoot
            {...props}
            aria-labelledby={titleId}
        >
            {media && (
                <CardMedia>
                    <CardMediaPrimary src={media} />
                    {/* List of items within media */}
                    {mediaItems && (
                        <CardMediaItems>
                            {mediaItems.map(mediaItem => (
                                <CardMediaItemsItem>
                                    {mediaItem.text && media.text}
                                    {mediaItem.icon && mediaItem.icon}
                                </CardMediaItemsItem>
                            ))}
                        </CardMediaItems>
                    )}
                </CardMedia>
            )}

            {/* Body */}
            <CardInner>
                {person && (
                    <CardPerson>
                        <CardPersonAvatar src={person.avatar} />
                        <CardPersonName>{person.name}</CardPersonName>
                    </CardPerson>
                )}

                <CardTitle id={titleId} to={slug}>
                    <CardTitleHeading>{title}</CardTitleHeading>
                </CardTitle>

                <CardBody>
                    <MDXRenderer>{body}</MDXRenderer>
                </CardBody>

                <CardCtas>
                    {ctaPrimary && (
                        <Link href={ctaPrimary.to}>{ctaPrimary.label}</Link>
                    )}
                    {ctaSecondary && (
                        <Link href={ctaSecondary.to}>{ctaSecondary.label}</Link>
                    )}
                </CardCtas>
            </CardInner>
        </CardRoot>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.oneOfType([PropTypes.func, PropTypes.string]).isRequired,
    mediaItems: PropTypes.array,
    slug: PropTypes.string.isRequired,
};

export default Card;
