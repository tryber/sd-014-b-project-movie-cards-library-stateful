import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitle extends Component {
  render() {
    const { value2, onChange } = this.props;

    return (
      <label htmlFor="movie-subtitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          value={ value2 }
          onChange={ onChange }
          data-testid="subtitle-input"
          id="movie-subtitle"
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  value2: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Subtitle;
