import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { imagePath, handleChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="imagePath-input-label">
        Imagem
        <input
          name="imagePath"
          value={ imagePath }
          onChange={ handleChange }
          data-testid="image-input"
          type="text"
        />
      </label>

    );
  }
}

InputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputImage;
