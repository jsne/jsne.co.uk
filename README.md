# JSNE Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/409c5c17-66c8-4e64-a4c0-7eb5c699d57f/deploy-status)](https://app.netlify.com/sites/jsne/deploys)

## Set Up

You'll need a Contentful Space ID and a Contentful token to get content for the site.
These are provided as environment variables using an `.env` file as shown below.

```BASH
cp .env.example .env

# Edit .env
CONTENTFUL_SPACE=<SPACE_ID>
CONTENTFUL_TOKEN=<API_TOKEN>
```

## Build

### Develop

```bash
yarn
yarn develop
```

### Production

```bash
yarn
yarn build
yarn serve
```

## Built With

-   [Gatsby](<https://github.com/gatsbyjs/gatsby>)
-   [React](<https://github.com/facebook/react>)
-   [Emotion](<https://github.com/emotion-js/emotion>)
