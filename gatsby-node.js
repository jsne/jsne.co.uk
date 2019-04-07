/* eslint-disable no-console, consistent-return */

const path = require('path');
const { webpackConfig } = require('./build');

exports.onCreateWebpackConfig = ({
    actions,
    // getConfig,
    // loaders,
    // rules,
    // stage,
}) => {
    actions.setWebpackConfig(webpackConfig);
};

exports.createPages = ({
    graphql,
    actions,
}) => {
    const { createPage } = actions;

    return graphql(`
        {
            allContentfulEvent {
                edges {
                    node {
                        title
                        description {
                            childMdx {
                                code {
                                    body
                                }
                            }
                            childMdx {
                                code {
                                    body
                                }
                            }
                        }
                        eventDate
                        titoId
                        venue {
                            name
                            slug
                        }
                        speaker {
                            name
                            handle
                        }
                        slug
                    }
                }
            }
        }
    `).then((result) => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        const eventTemplate = path.resolve('src/templates/event.js');

        result.data.allContentfulEvent.edges.forEach((edge) => {
            createPage({
                path: `/events/${edge.node.slug}`,
                component: eventTemplate,
                context: {
                    slug: edge.node.slug,
                    titoId: edge.node.titoId,
                },
            });
        });
    });
};
