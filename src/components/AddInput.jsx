import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddInput extends Component {
  render() {
    const { dfID, dfValue, onChange, dfText, dfName = dfID, type = 'text' } = this.props;
    return (
      <label htmlFor={ dfID } data-testid={ `${dfID}-input-label` }>
        { dfText }
        <input
          data-testid={ `${dfID}-input` }
          type={ type }
          name={ dfName }
          value={ dfValue }
          id={ dfID }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddInput.propTypes = {
  dfID: PropTypes.string.isRequired,
  dfValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dfText: PropTypes.string.isRequired,
  dfName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
