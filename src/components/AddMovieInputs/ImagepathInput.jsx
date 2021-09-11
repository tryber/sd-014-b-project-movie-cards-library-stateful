import React from 'react';
import PropTypes from 'prop-types';

class ImagepathInput extends React.Component {
  render() {
    const { imagePath, inputChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem:
        <input
          type="text"
          name="imagePath"
          id="image-input"
          data-testid="image-input"
          value={ imagePath }
          onChange={ inputChange }
        />
      </label>
    );
  }
}

ImagepathInput.propTypes = {
  imagePath: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default ImagepathInput;
