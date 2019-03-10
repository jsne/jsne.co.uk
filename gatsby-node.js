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

    const eventsTemplate = path.resolve('src/templates/events.js');

    return graphql(`
        {
            allContentfulEvents {
              edges {
                node {
                  titoId
                }
              }
            }
          }

        `).then((result) => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        result.data.allContentfulEvents.edges.forEach((edge) => {
            createPage({
                path: `/events/${edge.node.titoId}`,
                component: eventsTemplate,
                context: {
                    titoId: edge.node.titoId,
                },
            });
        });
    });
};
