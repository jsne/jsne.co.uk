import { graphql, useStaticQuery } from 'gatsby';

export const pageQueryAllNav = graphql`
    query pageAllNav {
        allContentfulPage(filter: { showInNavigation: { eq: true } }) {
            edges {
                node {
                    title
                    navigationLabel
                    slug
                }
            }
        }
    }
`;

/**
 * Get list of edges from `pageQueryAllNav` with actual props we want at top level
 * @return {Array<Object>} - List edges
 */
export const usePageQueryAllNavFormatted = () => {
    const data = useStaticQuery(pageQueryAllNav);
    return data.allContentfulPage.edges.map(edge => ({
        ...edge.node,
        // @HACK Make absolute path
        // @TODO Set this in contentful
        path: edge.node.slug.startsWith('/')
            ? edge.node.slug
            : `/${edge.node.slug}`,
    }));
};
