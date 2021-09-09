import PropTypes from 'prop-types';
import React from 'react';

class ImagePath extends React.Component {
  render() {
    const { imagePath, inputChange } = this.props;
    return (
      <label htmlFor="imageText" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          id="imageText"
          value={ imagePath }
          data-testid="image-input"
          onChange={ inputChange }
        />
      </label>
    );
  }
}

ImagePath.propTypes = {
  ImagePath: PropTypes.string,
  inputChange: PropTypes.func,
}.isRequired;

export default ImagePath;
