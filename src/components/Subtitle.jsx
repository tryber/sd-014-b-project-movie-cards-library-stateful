import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Subtitle extends Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <label htmlFor="subtitle-input-label" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          type="text"
          value={ subtitle }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
