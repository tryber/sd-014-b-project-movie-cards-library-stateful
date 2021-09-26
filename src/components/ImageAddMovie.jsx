import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageAddMovie extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label
        htmlFor="13"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          data-testid="image-input"
          onChange={ handleChange }
          value={ value }
          name="imagePath"
          id="image-input"
        />
      </label>
    );
  }
}
ImageAddMovie.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default ImageAddMovie;
