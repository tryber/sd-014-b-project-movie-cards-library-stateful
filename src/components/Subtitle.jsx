import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="movie-subtitle" data-testid="subtitle-input-label">
        <p>Subtítulo</p>
        <input
          name="subtitle"
          type="text"
          value={ value }
          onChange={ onChange }
          data-testid="subtitle-input"
          id="movie-subtitle"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Subtitle;
