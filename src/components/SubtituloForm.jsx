import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Subtitulo extends Component {
  render() {
    const { value, handleMovie } = this.props;
    return (
      <label htmlFor="control2" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitle"
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
          onChange={ handleMovie }
          value={ value }
        />
      </label>
    );
  }
}

Subtitulo.propTypes = {
  value: PropTypes.string.isRequired,
  handleMovie: PropTypes.func.isRequired,
};

export default Subtitulo;
