import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImagePath extends Component {
  render() {
    const { value, funcCallback } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          data-testid="image-input"
          type="text"
          value={ value }
          id="image"
          onChange={ funcCallback }
        />
      </label>
    );
  }
}
ImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  funcCallback: PropTypes.func.isRequired,
};

export default ImagePath;
