import { renderStylesToString } from 'emotion-server';
import { renderToString } from 'react-dom/server';

exports.replaceRenderer = ({ replaceBodyHTMLString, bodyComponent }) => (
    replaceBodyHTMLString(renderStylesToString(renderToString(bodyComponent)))
);
