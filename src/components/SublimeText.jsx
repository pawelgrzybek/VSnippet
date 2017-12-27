import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { html } from 'common-tags';

class SublimeText extends Component {

  renderSnippet(snippet) {
    const regexpMagic = /(\$)([a-z(]+)([^$])/gi;
    let escapedSnippet = snippet.replace(regexpMagic, '\\$1$2$3');
    escapedSnippet = escapedSnippet.split('  ').join('\\t');

    return html`
      <snippet>
        <content><![CDATA[
      ${escapedSnippet}
      ]]></content >
        <description>${this.props.description}</description>
        <tabTrigger>${this.props.tabtrigger}</tabTrigger>
        <!-- Optional: Set a scope to limit where the snippet will trigger -->
        <!-- <scope >source.python</scope > -->
      </snippet >
    `;
  }

  render() {
    return (
      <pre className="app__pre">
        {this.renderSnippet(this.props.snippet)}
      </pre>
    );
  }
}

SublimeText.propTypes = {
  description: PropTypes.string.isRequired,
  tabtrigger: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
};

export default SublimeText;
