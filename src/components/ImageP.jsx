import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageP extends Component {
  render() {
    const { value3, onChange } = this.props;

    return (
      <label htmlFor="movie-image" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ value3 }
          onChange={ onChange }
          data-testid="image-input"
          id="movie-image"
        />
      </label>
    );
  }
}

ImageP.propTypes = {
  value3: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ImageP;
