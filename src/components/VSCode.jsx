import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { html } from 'common-tags';

class VSCode extends Component {
  renderVSCodeVersion(snippet) {

    // escape " with \"
    // split lines by line-break
    const separatedSnippet = snippet.replace(/"/g, '\\"').replace(/\t/g, '\\t').split('\n');
    const separatedSnippetLength = separatedSnippet.length;

    // add double quotes around each line apart from the last one
    const newSnippet = separatedSnippet.map((line, index) => {
      return index === separatedSnippetLength - 1 ? `"${line}"` : `"${line}",`;
    });

    return html`
      "${this.props.description}": {
        "prefix": "${this.props.tabtrigger}",
        "body": [
          ${newSnippet.join('\n')}
        ],
        "description": "${this.props.description}"
      }
    `;
  }

  render() {
    return (
      <pre className="app__pre">
        {this.renderVSCodeVersion(this.props.snippet)}
      </pre>
    );
  }
}

VSCode.propTypes = {
  description: PropTypes.string.isRequired,
  tabtrigger: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
};

export default VSCode;
