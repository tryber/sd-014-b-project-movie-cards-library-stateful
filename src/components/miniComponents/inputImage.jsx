import React, { Component } from 'react';
import PropTypes from 'prop-types';

class inputImage extends Component {
  render() {
    const { onChange, imagePath } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image-input-label" name="imagePath">
        Imagem
        <input
          data-testid="image-input"
          value={ imagePath }
          onChange={ onChange }
          name="imagePath"
          type="text"
        />
      </label>
    );
  }
}

inputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default inputImage;
