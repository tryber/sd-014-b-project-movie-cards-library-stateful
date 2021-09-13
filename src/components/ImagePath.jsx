import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { imageValue, handleChange } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          id="image"
          data-testid="image-input"
          onChange={ handleChange }
          value={ imageValue }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  imageValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ImagePath;
