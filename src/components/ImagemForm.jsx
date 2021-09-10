import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Imagem extends Component {
  render() {
    const { value, handleMovie } = this.props;

    return (
      <label htmlFor="control3" data-testid="image-input-label">
        Imagem
        <input
          id="imagePath"
          name="imagePath"
          type="text"
          data-testid="image-input"
          onChange={ handleMovie }
          value={ value }
        />
      </label>
    );
  }
}

Imagem.propTypes = {
  value: PropTypes.string.isRequired,
  handleMovie: PropTypes.func.isRequired,
};

export default Imagem;
