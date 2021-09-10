import React from 'react';
import PropTypes from 'prop-types';

class ImageInput extends React.Component {
  render() {
    const { imagePath, atualiza } = this.props;
    return (
      <label htmlFor="imageInput" data-testid="image-input-label">
        Imagem
        <input
          id="imageInput"
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ atualiza }
        />
      </label>
    );
  }
}

ImageInput.propTypes = {
  imagePath: PropTypes.string.isRequired,
  atualiza: PropTypes.func.isRequired,
};

export default ImageInput;
