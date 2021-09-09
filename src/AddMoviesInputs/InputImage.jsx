import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { imagePath } = this.props;
    return (
      <label
        htmlFor="input-image"
        data-testid="image-input-label"
      >
        Imagem
        <input
          id="input-image"
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ imagePath }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default InputImage;
