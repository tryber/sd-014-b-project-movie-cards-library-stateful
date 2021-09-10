import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputMovieImage extends Component {
  render() {
    const { value, funcaoAtualizaPai } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          type="text"
          value={ value }
          id="imagePath"
          onChange={ funcaoAtualizaPai }
        />
      </label>
    );
  }
}

InputMovieImage.propTypes = {
  value: PropTypes.string.isRequired,
  funcaoAtualizaPai: PropTypes.func.isRequired,
};
export default InputMovieImage;
